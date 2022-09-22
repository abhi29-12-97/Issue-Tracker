// entry point to routers
import express from "express";
import createProject from "./project.js";
import { home } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", home);
router.use("/project", createProject);

export default router;
