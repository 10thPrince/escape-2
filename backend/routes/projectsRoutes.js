import e from "express";
import { createProject, getAllProjects } from "../controllers/projectsController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = e.Router()

router.post('/', protect, upload.array('images', 3), createProject)
router.get('/', getAllProjects)

export default router