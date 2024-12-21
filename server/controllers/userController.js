import userModel from "../models/users.model.js";

export const getUserData = async (req, res) => {
    try {

        const { userId } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        res.json({
            success: true,
            userData: {
                name: user.username,
                email: user.email,
                isAccountVerified: user.isAccountVerified
            }
        })

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export const getAllUsers = async(req, res) =>{
    try {
        const users = await userModel.find({}, '-password'); // Exclude password field
        return res.json({success: true, messsage: "users retrived successfully", users: users});
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}