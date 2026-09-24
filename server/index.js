import express from "express";
import cors from "cors";
import "dotenv/config";
import { authRouter } from "./routes/auth.js";
import { contentRouter } from "./routes/content.js";
import { progressRouter } from "./routes/progress.js";

const app = express(); 

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api", contentRouter);
app.use("/api/progress", progressRouter);

app.get("/api/health", (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Wizzkidz World API draait op http://localhost:${port}`);
});