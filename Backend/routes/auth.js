import express from "express";
import db from "../db.js"; // Pastikan menggunakan ekstensi .js untuk file lokal

const router = express.Router();

// Endpoint Signup
router.post("/signup", (req, res) => {
  const { nama_lengkap, email, password } = req.body;

  // Query untuk memasukkan data ke tabel
  const query = "INSERT INTO users (nama_lengkap, email, password) VALUES (?, ?, ?)";
  db.query(query, [nama_lengkap, email, password], (err, result) => {
    if (err) {
      console.error("Error saat signup:", err);
      return res.status(500).json({ status: "error", message: "Terjadi kesalahan saat signup" });
    }
    res.json({ status: "success", message: "Registrasi berhasil!" });
  });
});

// Endpoint Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Query untuk mencari user
  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error saat login:", err);
      return res.status(500).json({ status: "error", message: "Terjadi kesalahan saat login" });
    }

    if (results.length > 0) {
      res.json({ status: "success", message: "Login berhasil!" });
    } else {
      res.status(401).json({ status: "error", message: "Email atau password salah" });
    }
  });
});

export default router; // Gunakan export default untuk ES Module
