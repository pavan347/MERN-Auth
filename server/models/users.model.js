import mongoose from "mongoose";

// Schema for Login Logs
const loginLogSchema = new mongoose.Schema({
    ipAddress: {
        type: String,
        required: true,
    },
    deviceInfo: {
        type: Object,
        required: true,
    },
    loginTime: {
        type: Date,
        default: Date.now,
    },
    successful: {
        type: Boolean,
        required: true,
    },
    message : {
        type: String,
        reuqired: true
    }
});

// Main User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    verifyOtp: {
        type: String,
        default: ' ',
    },
    verifyOtpExpireAt: {
        type: Number,
        default: 0,
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    loginLogs: [loginLogSchema], 
    failedLoginAttempts: {
        type: Number,
        default: 0, 
    },
    accountLockedUntil: {
        type: Number, 
        default: 0,
    },
    totalFailedLoginAttempts: {
        type: Number,
        default: 0
    }
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;