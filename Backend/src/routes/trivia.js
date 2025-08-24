import express from "express";
import { createTrivia } from "../controllers/triviaController.js";
const router = express.Router();

// POST /api/trivia - Create a new trivia question
router.post("/", createTrivia);

export default router;
