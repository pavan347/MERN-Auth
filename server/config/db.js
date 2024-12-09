import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(`${process.env.MONGODB_URI}/mernauth`).then(()=>{
        console.log("Connected to Database");
    })
}
 
export default connectDB;