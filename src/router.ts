import { Router } from "express";
import {
  uploadMultipleFiles,
  uploadSingleFile,
} from "./controllers/images.controller";
import { getUsers } from "./controllers/user.controller";
import upload from "./middleware/ImageUpload";

const router = Router();

router.get("/users", getUsers);

router.post("/images/single", upload.single("image"), uploadSingleFile);
router.post("/images/multiple", upload.array("images", 5), uploadMultipleFiles);

export default router;
