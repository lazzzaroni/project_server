import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import about from "./routes/about";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Home");
  next();
});

app.use(about);

export default app;
