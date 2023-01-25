import { Router } from "express";
import { signIn, signUp } from "../Controller/AuthController.js";
import { loginValidation, userValidation } from "../Middleware/AuthMiddleware.js";

const authRouter = Router();

authRouter.post("/signUp", userValidation, signUp);
authRouter.post("/signIn", loginValidation, signIn);

export default authRouter;

