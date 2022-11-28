import { Router } from "express";
import { getAllUsers } from "./controllers/getAllUsers.controller";

const router = Router();

router.get("/users", getAllUsers);

export default router;
