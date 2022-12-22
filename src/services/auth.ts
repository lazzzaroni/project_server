import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import config from "../config";
import { IUser } from "../models/interfaces";

const JWT_KEY: Secret = config.secrets.jwt;

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user: IUser) => {
  const token = jwt.sign(
    { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin },
    JWT_KEY
  );
  return token;
};

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = bearer.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Not valid token" });
  }

  try {
    const user = jwt.verify(token, JWT_KEY);
    req.body.user = user;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: "Not valid token" });
  }
};
