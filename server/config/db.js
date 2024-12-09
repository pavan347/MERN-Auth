import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(`${process.env.MONGODB_LOCAL_URI}/mern-user-auth`).then(()=>{
        console.log("Connected to Database");
    })
}
 
export default connectDB;