const express = require("express");
const router = express.Router();
const prisma = require("../prismaClient"); // however you import your Prisma instance
const { verifySupabaseToken } = require("../utils/verifySupabaseToken"); // we’ll write this too

router.post("/", async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    const supabaseUser = await verifySupabaseToken(token);
    if (!supabaseUser) return res.status(401).json({ error: "Unauthorized" });

    const { displayName, bio } = req.body;

    const existing = await prisma.appUser.findUnique({
      where: { supabaseId: supabaseUser.sub },
    });

    if (existing) {
      return res.status(200).json(existing);
    }

    const newUser = await prisma.appUser.create({
      data: {
        supabaseId: supabaseUser.sub,
        displayName,
        bio,
      },
    });

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create user profile." });
  }
});

module.exports = router;
