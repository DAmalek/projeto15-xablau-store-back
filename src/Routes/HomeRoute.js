import { Router } from "express";
import { home } from "../Controller/HomeController.js";

const homeRouter = Router();

homeRouter.get("/home", home);

export default homeRouter