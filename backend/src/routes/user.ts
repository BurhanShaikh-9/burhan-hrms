import express from "express";
import upload from "../middleware/multer";
import { authenticateToken } from "../middleware/jwtCookie";
import { addUser, getAllUsers, getSingleUser } from "../controller/user";

const router = express.Router();

router.post("/user", authenticateToken, upload.any(), addUser);
router.get("/user", authenticateToken, getAllUsers);
router.get("/user/:userId", authenticateToken, getSingleUser);

export default router;