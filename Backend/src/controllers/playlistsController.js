import { prisma } from "../utils/prismaClient.js";
import { supabase } from "../utils/supabaseClient.js";

// Controller: Get all playlists of a user
export const getUserPlaylists = async (req, res) => {
  const { id } = req.params; // userId from route

  try {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: id,
      },
      include: {
        trivia: {
          include: { trivia: true }, // get trivia inside playlist if needed
        },
        user: {
          select: { displayName: true },
        },
      },
    });

    const response = playlists.map(({ user, ...rest }) => ({
      ...rest,
      creator: user.displayName,
    }));

    res.json(response);
  } catch (error) {
    console.error("Error fetching playlists:", error);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
};

// POST /playlists
export const createPlaylist = async (req, res) => {
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

    // Get data from request body
    const { name, description, imageUrl, visibility, mediaTags, userId } =
      req.body;

    if (!name || !userId || !visibility) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create playlist in DB
    const playlist = await prisma.playlist.create({
      data: {
        name,
        description,
        imageUrl,
        visibility,
        mediaTags,
        userId, // assumes playlist.ownerId → appUser.id
      },
    });

    return res.status(201).json(playlist);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update playlist name
export const updatePlaylistName = async (req, res) => {
  try {
    const playlistId = parseInt(req.params.id, 10);
    const { name } = req.body;
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

    const authUid = supaUser.id;

    // Lookup your AppUser record
    const appUser = await prisma.appUser.findUnique({
      where: { supabaseAuthId: authUid },
    });

    // Update playlist only if it belongs to the current user
    const updated = await prisma.playlist.update({
      where: {
        id: playlistId,
        userId: appUser.id,
      },
      data: {
        name,
      },
    });

    if (updated.count === 0) {
      return res.status(404).json({ error: "Playlist not found or not yours" });
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
