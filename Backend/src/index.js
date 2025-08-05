import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import triviaRoutes from "./routes/trivia.js";
import playlistRoutes from "./routes/playlists.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/playlists", playlistRoutes);
app.use("/api/trivia", triviaRoutes);

app.get("/", (req, res) => {
  res.send("🧠 Trivia backend is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
);
