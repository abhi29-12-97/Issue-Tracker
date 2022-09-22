// defining all the routes of the project page
import express from "express";
import ProjectController from "../controllers/projectControllers.js";

const projectRouter = express.Router();

projectRouter.get("/form", ProjectController.form);
projectRouter.post("/create", ProjectController.create);
projectRouter.get("/:projectId", ProjectController.details);
projectRouter.get("/issue/:projectId", ProjectController.issueForm);
projectRouter.post("/create-issue", ProjectController.createIssue);
projectRouter.post("/find/:id", ProjectController.find);
export default projectRouter;
