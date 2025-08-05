import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// GET /api/playlists - get all playlists with trivia
router.get("/", async (req, res) => {
  try {
    const playlists = await prisma.playlist.findMany({
      include: {
        trivia: {
          include: {
            trivia: true,
          },
        },
      },
    });

    // Flatten the join table data
    const formatted = playlists.map((p) => ({
      id: p.id,
      name: p.name,
      createdAt: p.createdAt,
      trivia: p.trivia.map((t) => t.trivia),
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
});

export default router;
