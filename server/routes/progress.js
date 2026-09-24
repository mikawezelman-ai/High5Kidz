import { Router } from "express";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/requireAuth.js";

export const progressRouter = Router();

progressRouter.use(requireAuth);

progressRouter.get("/", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM progress WHERE user_id = ?",
    [req.userId]
  );
  res.json(rows);
});

progressRouter.post("/complete", async (req, res) => {
  const { missionId, score } = req.body;

  const [[mission]] = await pool.query(
    "SELECT xp_reward FROM missions WHERE id = ?",
    [missionId]
  );
  if (!mission) return res.status(404).json({ error: "Missie niet gevonden." });

  await pool.query(
    `INSERT INTO progress (user_id, mission_id, completed, score, completed_at)
     VALUES (?, ?, TRUE, ?, NOW())
     ON DUPLICATE KEY UPDATE completed = TRUE, score = VALUES(score), completed_at = NOW()`,
    [req.userId, missionId, score ?? null]
  );

  await pool.query("UPDATE profiles SET xp = xp + ? WHERE id = ?", [
    mission.xp_reward,
    req.userId,
  ]);

  const [[profile]] = await pool.query(
    "SELECT xp, level FROM profiles WHERE id = ?",
    [req.userId]
  );

  res.json({ ok: true, xp: profile.xp, level: profile.level });
});