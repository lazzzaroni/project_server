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
  const user = await User.findById(req.params.token);

  try {
    if (!user) {
      res.status(404).end();
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
}
