import express from "express";
import { userRegister, userLogin, getUser, getUserById, updateUserById } from "../controller/user.controller.js";
import auth from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/getUsers", getUser);
userRouter.get("/getUser/:id", auth,getUserById);
userRouter.put("/updateUser/:id",auth, updateUserById);
export default userRouter;
