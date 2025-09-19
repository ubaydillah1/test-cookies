import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.cookie("token", "123456", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({ message: "Cookies Set" });
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
