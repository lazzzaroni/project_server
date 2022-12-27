import { NextFunction, Request, Response } from "express";
import Event from "../models/Event";

export const createEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newEvent = new Event({
      name: req.body.name,
      description: req.body.description,
    });
    const createdEvent = await newEvent.save();
    res.json(createdEvent);
  } catch (e) {
    next(e);
  }
};
