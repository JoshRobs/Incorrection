import { prisma } from "../utils/prismaClient.js";
import { supabase } from "../utils/supabaseClient.js";

export const createTrivia = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "No token provided" });

    // Validate Supabase user
    const {
      data: { user: supaUser },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !supaUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const {
      userId,
      category,
      title,
      incorrectStatement,
      highlightStart,
      highlightEnd,
      correction,
      visibility,
      tags,
      comment,
      hint,
    } = req.body;

    const newTrivia = await prisma.trivia.create({
      data: {
        userId,
        category,
        title,
        incorrectStatement,
        highlightStart,
        highlightEnd,
        correction,
        visibility,
        tags,
        comment,
        hint,
      },
    });

    res.status(201).json(newTrivia);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create trivia question." });
  }
};
