import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import { createNewUser, loginUser } from "./controllers/auth.controller";
import router from "./router";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "This is an API" });
  next();
});

app.use("/api", router);

app.post("/signup", createNewUser);
app.post("/signin", loginUser);

export default app;
