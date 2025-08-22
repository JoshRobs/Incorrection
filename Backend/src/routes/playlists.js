import express from "express";
import {
  getUserPlaylists,
  createPlaylist,
} from "../controllers/playlistsController.js";
const router = express.Router();

// GET "/api/playlists/:id" - Get all playlists of a user
router.get("/:userId", getUserPlaylists);
router.post("/", createPlaylist);

export default router;
