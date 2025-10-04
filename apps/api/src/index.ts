import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "API running with pnpm" });
});

const PORT = process.env.SERVER_PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT} : http://localhost:${PORT}`));
