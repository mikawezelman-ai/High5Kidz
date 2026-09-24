import { Router } from "express";
import { pool } from "../db.js";

export const contentRouter = Router();

contentRouter.get("/worlds", async (_req, res) => {
  const [rows] = await pool.query("SELECT * FROM worlds");
  res.json(rows);
});

contentRouter.get("/worlds/:worldId/missions", async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM missions WHERE world_id = ? ORDER BY sort_order",
    [req.params.worldId]
  );
  res.json(rows);
});

contentRouter.get("/missions/:missionId", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM missions WHERE id = ?", [
    req.params.missionId,
  ]);
  if (!rows[0]) return res.status(404).json({ error: "Missie niet gevonden." });
  res.json(rows[0]);
});