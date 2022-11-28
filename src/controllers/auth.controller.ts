import { Request, Response } from "express";
import User from "../models/User";

export async function createNewUser(req: Request, res: Response) {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const createdUser = await newUser.save();
    res.json(createdUser);
  } catch (err: any) {
    res.status(400).json({ message: `${err.message}` });
  }
}

// TODO:
export async function loginUser(req: Request, res: Response) {}
