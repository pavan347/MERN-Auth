import userModel from "../models/users.model.js";
import bcrypt from "bcryptjs"
import { jwt } from "jsonwebtoken";

export const register = async (req, res) => {

    const { username, email, password } = res.body;

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

        const token = jwt.sign({id: user._id}, process.env.JWT_SECERT_KEY, {expiresIn: '7d'});

        res.cookie('token' , token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite : process.env.NODE_ENV === "production" ? 'strict' : 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.json({sucess:true});

    } catch (e) {
        return res.json({ success: false, message: e.message });
    }

}

export const login = async (req, res)=>{
    const { email, password} = res.body;

    if(!email || !password) {
        return res.json({success: false, message: "Email and Password are required."})
    }

    try {

        const user =await userModel.findOne({email});

        if(!user) {
            return res.json({ success: false, message: "Email Invalid" });
        }

        const isMatch = await bcrypt.compare(user.password, password);

        if(!isMatch) {
            return res.json({ success: false, message: "Invalid Password" });
        }

        const token = await jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite : process.env.NODE_ENV === "production" ? 'strict' : 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.json({sucess:true});
        
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
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.json({success: true, message: "Logged out successfully"});

        
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}