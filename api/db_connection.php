<?php
// Konfigurasi database
$host = "localhost"; // Nama host (sesuaikan dengan server Anda)
$user = "root";      // Username MySQL (default biasanya "root")
$password = "";      // Password MySQL (kosong jika default)
$dbname = "sima";    // Nama database Anda

// Membuat koneksi
$conn = new mysqli($host, $user, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Jika berhasil
echo "Koneksi berhasil";
?>
