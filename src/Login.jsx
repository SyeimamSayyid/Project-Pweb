import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useAnimation from "./useAnimation"; // Custom hook
import Loader from "./Loader"; 

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Fungsi handleSubmit untuk mengirim data ke API Express.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Kirim data login ke backend Express.js
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Jika login berhasil, simpan token atau ID user
        localStorage.setItem("token", result.token); // Gunakan token dari response jika ada
        alert(result.message);
        setLoading(false);
        navigate("/dashboard"); // Arahkan ke dashboard setelah login berhasil
      } else {
        // Jika login gagal, tampilkan pesan error
        setError(result.message);
        setLoading(false);
      }
    } catch (error) {
      // Menangani error selama proses request
      setError("Terjadi kesalahan saat mencoba login. Coba lagi nanti.");
      setLoading(false);
    }
  };

  const leftPanelClass = useAnimation(styles.hiddenLeft, styles.slideInLeft, 500);
  const rightPanelClass = useAnimation(styles.hiddenRight, styles.slideInRight, 700);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.login_container}>
      <div className={`${styles.login_form_container} ${styles.fadeIn}`}>
        <div className={`${styles.left} ${leftPanelClass}`}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login ke Akun</h1>
            {error && <p className={styles.error}>{error}</p>}
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
              Login
            </button>
          </form>
        </div>
        <div className={`${styles.right} ${rightPanelClass}`}>
          <h1>Belum Daftar?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Ayo Daftar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
