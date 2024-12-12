import express from "express";
import { register, login, logout, sendVerificationOtp, verifyEmail, isAuthenticated } from "../controllers/authController.js";
import userAuth from "../middlewares/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerificationOtp);
authRouter.post("/verify-email", userAuth, verifyEmail); 
authRouter.post("/is-auth", userAuth, isAuthenticated); 

export default authRouter;