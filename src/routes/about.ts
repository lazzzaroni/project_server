import { Router } from "express";
import { about } from "../controllers/about";

const app = Router();

app.get("/about", about);

export default app;
