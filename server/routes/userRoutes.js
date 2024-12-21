import express from "express"
import userAuth from "../middlewares/userAuth.js";
import { getAllUsers, getUserData } from "../controllers/userController.js";
import isAdmin from "../middlewares/adminAuth.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);
userRouter.get("/get-all-users", isAdmin, getAllUsers);

export default userRouter;