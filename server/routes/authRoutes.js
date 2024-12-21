import express from "express";
import { register, login, logout, sendVerificationOtp, verifyEmail, isAuthenticated, getUserLoginLogs, adminLogin } from "../controllers/authController.js";
import userAuth from "../middlewares/userAuth.js";
import isAdmin from "../middlewares/adminAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerificationOtp);
authRouter.post("/verify-email", userAuth, verifyEmail); 
authRouter.get("/is-auth", userAuth, isAuthenticated);
// admin routes 
authRouter.post("/admin-login", adminLogin);
authRouter.get("/get-user-login-logs/:email", isAdmin, getUserLoginLogs); 

export default authRouter;