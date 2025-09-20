import express from "express";
import type { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://e-learning-test-online.vercel.app",
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.cookie("token", "123456", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  app.get("/profile", (req, res) => {
    const token = req.cookies?.token || null;
    res.json({ token });
  });

  res.json({ message: "Cookies Set" });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
