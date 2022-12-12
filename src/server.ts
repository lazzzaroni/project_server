import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { createNewUser, loginUser } from "./controllers/auth.controller";
import ErrorHandler from "./middleware/ErrorHandler";
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

app.use(ErrorHandler);

export default app;
