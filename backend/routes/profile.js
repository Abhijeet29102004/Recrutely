import express from "express";
import { saveUserProfile } from "../controllers/profile.controller.js";
// import { authenticateJWT } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", saveUserProfile);
// router.get("/", authenticateJWT, getUserProfile);

export default router;