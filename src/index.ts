import express from "express";
import type { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://e-learning-test-online.vercel.app", // FE domain
    credentials: true,
  })
);

// Route set cookie
app.get("/set-cookie", (req: Request, res: Response) => {
  res.cookie("token", "123456", {
    httpOnly: true,
    sameSite: "none",
    secure: true, // harus HTTPS
  });

  res.json({ message: "Cookies Set" });
});

// Route profile (baca cookie)
app.get("/profile", (req: Request, res: Response) => {
  const token = req.cookies?.token || null;
  res.json({ token });
});

// Start server
app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
