import mongoose from "mongoose";

// Schema for Login Logs
const loginLogSchema = new mongoose.Schema({
    ipAddress: {
        type: String,
        required: true,
    },
    deviceInfo: {
        type: String,
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
    loginLogs: [loginLogSchema], // Array of login logs
    failedLoginAttempts: {
        type: Number,
        default: 0, // Tracks consecutive failed attempts
    },
    accountLockedUntil: {
        type: Date, // Specifies when the lock expires
        default: null,
    },
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;