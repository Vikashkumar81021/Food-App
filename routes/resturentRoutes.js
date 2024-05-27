import express from "express";
import { authMiddleware } from "../middleware/authMidleware.js";
const router = express.Router();

router.post("/create",authMiddleware,restrurentController)
export default  router;
