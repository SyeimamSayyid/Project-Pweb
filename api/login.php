<?php
session_start(); // Memulai sesi untuk login

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Koneksi ke database
    $conn = new mysqli("localhost", "root", "", "sima");

    // Cek koneksi
    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    // Ambil data dari form
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Query untuk mendapatkan pengguna berdasarkan email
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verifikasi password
        if (password_verify($password, $user["password"])) {
            $_SESSION["user_id"] = $user["id"];
            $_SESSION["nama_lengkap"] = $user["nama_lengkap"];

            // Kirim respons sukses
            echo json_encode([
                "status" => "success",
                "message" => "Login berhasil. Selamat datang, " . $user["nama_lengkap"] . "!",
                "nama_lengkap" => $user["nama_lengkap"],
            ]);
        } else {
            // Kirim respons jika password salah
            echo json_encode([
                "status" => "error",
                "message" => "Password salah.",
            ]);
        }
    } else {
        // Kirim respons jika email tidak ditemukan
        echo json_encode([
            "status" => "error",
            "message" => "Email tidak ditemukan.",
        ]);
    }

    // Tutup koneksi
    $stmt->close();
    $conn->close();
}
?>
