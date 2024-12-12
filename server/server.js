import express from 'express'
import cors from "cors"
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';
  
const app = express();
const port = process.env.PORT || 4000
connectDB(); 

app.use(express.json()); 
app.use(cookieParser())
app.use(cors({credentials: true}))
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=> {
    res.send("API Working");
})

app.use("/api/auth", authRouter)

app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`The server is running on the port http://localhost:${port}`);
})