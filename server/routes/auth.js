import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { pool } from "../db.js";
import { requireAuth } from "../middleware/requireAuth.js";

export const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Vul alle velden in." });
  }

  const [existing] = await pool.query(
    "SELECT id FROM profiles WHERE email = ?",
    [email]
  );
  if (existing.length > 0) {
    return res.status(409).json({ error: "Dit e-mailadres is al in gebruik." });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const [result] = await pool.query(
    "INSERT INTO profiles (username, email, password_hash) VALUES (?, ?, ?)",
    [username, email, passwordHash]
  );

  const token = jwt.sign(
    { userId: result.insertId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token, user: { id: result.insertId, username, email } });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await pool.query(
    "SELECT id, username, email, password_hash FROM profiles WHERE email = ?",
    [email]
  );
  const user = rows[0];

  if (!user) {
    return res.status(401).json({ error: "Onbekend e-mailadres of wachtwoord." });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: "Onbekend e-mailadres of wachtwoord." });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({
    token,
    user: { id: user.id, username: user.username, email: user.email },
  });
});

authRouter.get("/me", requireAuth, async (req, res) => {
  const [rows] = await pool.query(
    "SELECT id, username, email, level, xp FROM profiles WHERE id = ?",
    [req.userId]
  );
  if (!rows[0]) return res.status(404).json({ error: "Niet gevonden." });
  res.json(rows[0]);
});