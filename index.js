import express from "express"
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import kycRoute from "./routes/kyc.route.js";

import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

mongoose
    .connect(process.env.MONGO_URL)
    .then( ()=> console.log("MongoDB Connection was successful!"))
    .catch( (error)=> console.log(error));


app.use(express.json())   
app.use(cookieParser())


app.use(userRoute);
app.use(postRoute);
app.use(kycRoute);

app.listen(port, ()=>{
    console.log(`App is running on http://localhost:${port}`)
})
