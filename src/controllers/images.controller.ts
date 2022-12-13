import { Request, Response } from "express";

export async function uploadSingleFile(req: Request, res: Response) {
  if (req.file) {
    res.send("Single file uploaded successfully");
  } else {
    res.status(400).send("Please upload a valid image");
  }
}

export async function uploadMultipleFiles(req: Request, res: Response) {
  if (req.files) {
    res.send("Multiple files uploaded successfully");
  } else {
    res.status(400).send("Please upload a valid images");
  }
}
