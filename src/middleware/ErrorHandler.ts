import { NextFunction, Request, Response } from "express";
import config from "../config";

const ErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Middleware Error Handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: config.env === "development" ? err.stack : {},
  });
};

export default ErrorHandler;
