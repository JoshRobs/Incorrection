import { prisma } from "../utils/prismaClient.js"; // assuming you have a prisma instance set up
import { supabase } from "../utils/supabaseClient.js"; // assuming you have a supabase client set up

export const createUser = async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    const {
      data: { user: supaUser },
      error,
    } = await supabase.auth.getUser(token);
    if (error || !supaUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { email, supabaseAuthId, displayName } = req.body;

    let user = await prisma.appUser.findUnique({
      where: { supabaseAuthId },
    });

    if (!user) {
      user = await prisma.appUser.create({
        data: {
          email,
          supabaseAuthId,
          displayName,
        },
      });
    } else {
      return res.status(200).json(user);
    }

    res.json(user);
  } catch (error) {
    console.error("Error creating or fetching user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "No token provided" });

    // Validate Supabase token
    const {
      data: { user: supaUser },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !supaUser) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const appUser = await prisma.appUser.findUnique({
      where: { supabaseAuthId: supaUser.id },
    });

    if (!appUser) return res.status(404).json({ error: "AppUser not found" });

    return res.json({ supaUser, appUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
