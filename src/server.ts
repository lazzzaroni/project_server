import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import config from "./config";
import { createNewUser, loginUser } from "./controllers/auth.controller";
import router from "./router";
import { protect } from "./services/auth";

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "This is an API" });
  next();
});

app.use("/api", protect, router);

app.post("/signup", createNewUser);
app.post("/signin", loginUser);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("Middleware Error Handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: config.env === "development" ? err.stack : {},
  });
});

export default app;
