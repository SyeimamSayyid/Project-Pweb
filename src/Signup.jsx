import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useAnimation from "./useAnimation"; // Custom hook untuk animasi
import Loader from "./Loader"; // Komponen Loader

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    nama_lengkap: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Fungsi handleSubmit untuk mengirim data ke API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mengirim data ke API menggunakan fetch
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama_lengkap: data.nama_lengkap,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        alert(result.message); // Menampilkan pesan sukses dari API
        setLoading(false);
        navigate("/login"); // Arahkan ke halaman login setelah registrasi berhasil
      } else {
        setError(result.message); // Menampilkan pesan error dari API
        setLoading(false);
      }
    } catch (error) {
      setError("Terjadi kesalahan saat mendaftar. Coba lagi."); // Menangani kesalahan
      setLoading(false);
    }
  };

  const leftPanelClass = useAnimation(styles.hiddenLeft, styles.slideInLeft, 500);
  const rightPanelClass = useAnimation(styles.hiddenRight, styles.slideInRight, 700);

  return (
    <div className={styles.signup_container}>
      <div className={`${styles.signup_form_container} ${styles.fadeIn}`}>
        <div className={`${styles.left} ${leftPanelClass}`}>
          <h1>Selamat Datang Kembali</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Login
            </button>
          </Link>
        </div>
        <div className={`${styles.right} ${rightPanelClass}`}>
          {loading ? (
            <Loader /> // Tampilkan loader jika loading = true
          ) : (
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Buat Akun</h1>
              <input
                type="text"
                placeholder="Nama Lengkap"
                name="nama_lengkap"
                onChange={handleChange}
                value={data.nama_lengkap}
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.green_btn}>
                Daftar
              </button>
            </form>
          )}
          {error && <p className={styles.error_msg}>{error}</p>} {/* Tampilkan pesan error */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
