import { Router } from "express";
import { createEvent } from "./controllers/events.controller";
import {
  uploadMultipleFiles,
  uploadSingleFile,
} from "./controllers/images.controller";
import {
  getOneUser,
  getUsers,
  updateUser,
} from "./controllers/user.controller";
import upload from "./middleware/ImageUpload";

const router = Router();

router.get("/users", getUsers);
router.get("/user", getOneUser);
router.patch("/user", updateUser);

router.post("/event", createEvent);

router.post("/images/single", upload.single("image"), uploadSingleFile);
router.post("/images/multiple", upload.array("images", 5), uploadMultipleFiles);

export default router;
