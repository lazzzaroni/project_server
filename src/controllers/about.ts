import { Request, Response } from "express";

export const about = (req: Request, res: Response) => {
  res.send("About");
};
