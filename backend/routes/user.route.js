import express from "express";
import { userRegister, userLogin } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

export default userRouter;
