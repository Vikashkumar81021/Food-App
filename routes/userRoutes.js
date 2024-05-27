import express from "express";
import { deleteProfile, getUser, updatePassword, updateUser } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMidleware.js";

const router = express.Router();

router.get("/getUser", authMiddleware, getUser);
router.put("/updateUser", authMiddleware, updateUser);
router.post("/updatePassword",authMiddleware,updatePassword)
router.delete("/deleteUser/:id",authMiddleware,deleteProfile)
export default router;
