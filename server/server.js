import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 4000

app.get("/", (req, res)=> {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`The server is running on the port http://localhost:${port}`);
})