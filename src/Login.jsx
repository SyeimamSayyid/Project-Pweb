import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import useAnimation from "./useAnimation"; // Custom hook
import Loader from "./Loader"; // Loader component

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fakeToken = "fakeToken123456789"; // Fake token untuk simulasi login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi autentikasi
    setTimeout(() => {
      // Abaikan validasi email dan password, tetap login
      localStorage.setItem("token", fakeToken); // Simpan token ke localStorage
      setLoading(false);
      navigate("/dashboard"); // Arahkan ke dashboard setelah login
    }, 1000); // Simulasi API call selama 1 detik
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
