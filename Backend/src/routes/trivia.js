import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// POST /api/trivia - Create a new trivia question
router.post("/", async (req, res) => {
  const {
    category,
    title,
    incorrectStatement,
    highlightStart,
    highlightEnd,
    correction,
    tags,
    comment,
  } = req.body;

  try {
    const newTrivia = await prisma.trivia.create({
      data: {
        category,
        title,
        incorrectStatement,
        highlightStart,
        highlightEnd,
        correction,
        tags,
        comment,
      },
    });

    res.status(201).json(newTrivia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create trivia question." });
  }
});

export default router;
