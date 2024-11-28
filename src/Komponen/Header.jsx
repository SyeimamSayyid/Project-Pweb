import React from 'react';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  // Fungsi untuk logout
  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');
    // Navigasi ke halaman Landing Page
    navigate('/');
  };

  return (
    <div className="header">
      <div className="header-title">SIMA</div>
      <ul className="header-nav">
        <li><a href="#home">Home</a></li>
        <li>
          {/* Tombol Logout */}
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
