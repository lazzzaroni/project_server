import { Request, Response } from "express";
import User from "../models/User";

export async function getAllUsers(req: Request, res: Response) {
  const userObj = await User.find();
  res.json(userObj);
}
