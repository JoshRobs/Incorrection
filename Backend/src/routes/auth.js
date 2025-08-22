import express from "express";
import { createUser, getUser } from "../controllers/authController.js";
const router = express.Router();

// Create or fetch app user after signup
router.post("/", createUser);
router.get("/", getUser);

export default router;
