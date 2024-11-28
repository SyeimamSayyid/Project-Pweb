import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // Tambahkan ekstensi .js untuk ES Module

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parsing JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parsing form-urlencoded

// Routing
app.use("/api", authRoutes); // Gunakan route auth di /api

// Port server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
