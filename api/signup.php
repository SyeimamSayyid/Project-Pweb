<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Konfigurasi koneksi ke database
$servername = "localhost"; // Sesuaikan dengan konfigurasi server Anda
$username = "root";        // Sesuaikan dengan username database Anda
$password = "";            // Sesuaikan dengan password database Anda
$dbname = "sima";          // Nama database Anda

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Koneksi database gagal!"]);
    exit();
}

// Ambil data dari request
$nama_lengkap = isset($_POST['nama_lengkap']) ? $_POST['nama_lengkap'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Validasi input
if (empty($nama_lengkap) || empty($email) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "Semua bidang harus diisi!"]);
    exit();
}

// Periksa apakah email sudah digunakan
$email_check = $conn->prepare("SELECT id FROM users WHERE email = ?");
$email_check->bind_param("s", $email);
$email_check->execute();
$email_check->store_result();

if ($email_check->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Email sudah terdaftar!"]);
    $email_check->close();
    exit();
}
$email_check->close();

// Enkripsi password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Simpan data ke database
$query = $conn->prepare("INSERT INTO users (nama_lengkap, email, password) VALUES (?, ?, ?)");
$query->bind_param("sss", $nama_lengkap, $email, $hashed_password);

if ($query->execute()) {
    echo json_encode(["status" => "success", "message" => "Pendaftaran berhasil!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Terjadi kesalahan saat mendaftar."]);
}

$query->close();
$conn->close();
