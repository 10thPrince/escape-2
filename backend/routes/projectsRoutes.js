import e from "express";
import { createProject } from "../controllers/projectsController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = e.Router()

router.post('/', protect, upload.array('image', 3), createProject)

export default router