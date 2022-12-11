import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import { comparePasswords, createJWT, hashPassword } from "../services/auth";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: await hashPassword(req.body.password),
    });

    const token = createJWT(newUser);
    const createdUser = await newUser.save();
    res.json({ createdUser, token });
  } catch (e) {
    console.error(e);
    res.status(400).json({
      message: "User with specified email address already exists",
    });
    next(e);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const user = await User.findOne({
    id: req.body.id,
    email: req.body.email,
  });
  if (user === null) return;

  const isValid = await comparePasswords(
    req.body.password,
    user.password as string
  );
  if (!isValid) {
    return res.status(400).json({ message: "User is not valid" });
  }

  const token = createJWT(user);
  res.json({ token });
};
