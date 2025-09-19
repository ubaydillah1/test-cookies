import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.cookie("token", "123456", {
        httpOnly: true,
        sameSite: "none",
        secure: false,
    });
    res.json({ message: "Cookies Set" });
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
//# sourceMappingURL=index.js.map