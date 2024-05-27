import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import authRouter from './routes/auth-Routes.js'
import userRoute from './routes/userRoutes.js'
import resturentRoute from "./routes/resturentRoutes.js"
import { DBconnection } from "./db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/user",userRoute)
app.use("/api/v1/resturent",resturentRoute)

DBconnection();
app.listen(PORT, () => {
  console.log(`server is listen ${PORT}`);
});
