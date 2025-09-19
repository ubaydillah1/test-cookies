// server.ts
import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3002;

// Menentukan apakah kita di lingkungan produksi atau pengembangan
const isProduction = process.env.NODE_ENV === "production";

// Origin disesuaikan: localhost untuk dev, URL Vercel untuk prod
const origin = isProduction
  ? "https://test-cookies-green.vercel.app"
  : "http://localhost:3000";

app.use(express.json());
app.use(
  cors({
    origin: origin,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.cookie("token", "123456", {
    httpOnly: true,
    // Gunakan "none" untuk cross-origin (prod), "lax" untuk same-site (local)
    sameSite: isProduction ? "none" : "lax",
    // "true" untuk HTTPS (prod), "false" untuk HTTP (local)
    secure: isProduction,
  });

  res.json({ message: "Cookies Set" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
