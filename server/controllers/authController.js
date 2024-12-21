import userModel from "../models/users.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import transporter from "../config/nodemailer.js";
import {UAParser} from 'ua-parser-js';

export const register = async (req, res) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.json({ success: false, message: "Missing Details" });
    }

    try {

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: "User Already Exist.." })
        }

        const hashedPassowrd = await bcrypt.hash(password, 10);

        const user = new userModel({ username, email, password: hashedPassowrd })
        await user.save();


        const emailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to User Auth",
            text: `Welcome to User Auth, Your account has been created successfully with email: ${email} and password: ${password}`,
        }

        const info = await transporter.sendMail(emailOptions)

        return res.json({success:true, message: "user registered successfully"});

    } catch (e) {
        return res.json({ success: false, message: e.message });
    }

}

export const login = async (req, res)=>{

    const ipAddress = req.clientIp; // or req.ip
    const parser = new UAParser(req.headers['user-agent']);

    const userAgentInfo = parser.getResult();

    const deviceInfo = {
        browser: userAgentInfo.browser.name || 'Unknown',
        browserVersion: userAgentInfo.browser.version || 'Unknown',
        os: userAgentInfo.os.name || 'Unknown',
        osVersion: userAgentInfo.os.version || 'Unknown',
        device: userAgentInfo.device.model || 'Unknown',
        platform: userAgentInfo.device.type || 'desktop', // e.g., mobile, tablet, or desktop
    };

    console.log('Extracted Device Info:', deviceInfo);
    const { email, password} = req.body;

    if(!email || !password) {
        return res.json({success: false, message: "Email and Password are required."})
    }

    try {

        const user =await userModel.findOne({email});

        if(!user) {
            return res.json({ success: false, message: "Email Invalid" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            await logUserLogin(user._id, ipAddress, deviceInfo, false, "Invalid Password" );
            return res.json({ success: false, message: "Invalid Password" });
        }

        await logUserLogin(user._id, ipAddress, deviceInfo, true, "Login Successfull");

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '7d'});


        return res.json({success:true, message: "Login successfull", token});
        
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}


export const logout = async (req, res) =>{
    try {

        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite : process.env.NODE_ENV === "production" ? 'strict' : 'none',
        })

        res.json({success: true, message: "Logged out successfully"});

        
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const sendVerificationOtp = async ( req, res) => {
    try {

        const { userId } = req.body;

        const user = await userModel.findById(userId);

        if(user.isAccountVerified) {
            return res.json({success: false, message: "Account Already Verified"});
        }

        const otp = String(Math.floor( 100000 + Math.random() * 900000));

        user.verrifyOtp = otp;
        user.verrifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Account Verification OTP",
            text: `Your OTP is : ${otp}  Verify your account using OTP`,
        }

        await transporter.sendMail(mailOptions);

        res.json({success: true, message: "Verification OTP sent on Email."})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}

export const verifyEmail = async (req, res) => {
    const {userId, otp} = req.body;

    if(!userId || !otp) {
        return res.json({success: false, message: "Missing Details"})
    }

    try {

        const user = await userModel.findById(userId);

        if(!user) {
            return res.json({success: false, message: "User not found"})
        }

        if(user.verrifyOtp === '' || user.verrifyOtp != otp) {
            return res.json({success: false, message: "Invalid OTP"})
        }

        if(user.verrifyOtpExpireAt < Date.now()) {
            return res.json({success: false, message: "OTP Expired"})
        }

        user.isAccountVerified = true;

        user.verrifyOtp = '';
        user.verrifyOtpExpireAt = 0;

        await user.save();

        res.json({success: true, message: "Email verified successfully"});
        
    } catch (error) {
        return res.json({success: false, message: error.message})
    }

}

export const isAuthenticated = async (req, res) => {
    try {
        return res.json({success: true});
    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}


async function logUserLogin(userId, ipAddress, deviceInfo, successful, message) {
    try {
        const user = await userModel.findById(userId);
        if (!user) return {success: false, message: 'User not Found'};

        const loginLog = {
            ipAddress,
            deviceInfo,
            successful,
            message
        };

        user.loginLogs.push(loginLog);
        await user.save();
        console.log('Login logged successfully!');
        return {success: true, message: 'Login logged successfully!'}
    } catch (error) {
        console.error('Error logging login:', error.message);
        return {success: false, message: error.message}
    }
}

export const adminLogin = async(req, res) => {
    try {

        const { email, password } = req.body;

        if(!email || !password) {
            return res.json({success: false, message: "Missing Details"});
        }

        if(email !== process.env.ADMIN_EMAIL) {
            return res.json({success: false, message: "Invalid Email"});
        }

        const isMatch = (password === process.env.ADMIN_PASS);

        if(!isMatch) {
            return res.json({success: false, message: "Invalid Password"});
        }

        const token = jwt.sign({id: process.env.ADMIN_EMAIL}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'});
        
        return res.json({success: true, message: "Admin Logged in Successfully", token})

    } catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export const getUserLoginLogs = async(req, res)=>{
    try {
        const {userId} = req.body;
        const user = await userModel.findById(userId).select('loginLogs');
        if (!user) throw new Error('User not found');
        return res.json({success: true, message: "User logs retrived successfully", loginLogs: user.loginLogs});
    } catch (error) {
        console.error('Error fetching login logs:', error.message);
        return res.json({success: false, message: error.message});
    }
}
