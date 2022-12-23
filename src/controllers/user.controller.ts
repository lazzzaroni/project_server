import { NextFunction, Request, Response } from "express";
import User from "../models/User";

export async function getUsers(req: Request, res: Response) {
  const userObj = await User.find();
  res.json(userObj);
}

export async function getOneUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = await User.findById(req.body.user.id);
  try {
    if (!user) {
      throw new Error();
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
}

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const updatedUser = new User({
      _id: req.body.user.id,
      name: req.body.name,
    });
    const update = await User.updateOne({ _id: req.body.user.id }, updatedUser);
    res.json({ message: "User has been updated successfully!" });
  } catch (e) {
    next(e);
  }
}
