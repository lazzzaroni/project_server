import cors from "cors";
import express, { Express, NextFunction, Request, Response } from "express";
import User from "./models/User";
import about from "./routes/about";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "This is an API" });
  next();
});

app.post("/user", async (req: Request, res: Response) => {
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
});
app.get("/user", async (req: Request, res: Response) => {
  const userObj = await User.find();
  res.json(userObj);
});

app.use(about);

export default app;
