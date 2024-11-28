import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import Header from './Komponen/Header.jsx';
import Clock from './Clock.jsx';
import InternetSpeed from './InternetSpeed';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header /> {/* Header Komponen */}
      <h1>Selamat Datang,AlfianEkaPutra</h1>

      <div className="card-container">
        <div className="card">
          <Link to="/profil" className="title-link">
            <div className="title">Profil</div>
          </Link>
          <div className="content">Profil Mahasiswa</div>
          <div className="step">Profil</div>
        </div>

        <div className="card">
          <div className="title">Mata Kuliah yang diambil</div>
          <div className="content">Mata kuliah yang diambil</div>
          <div className="step">Mata Kuliah</div>
        </div>
      </div>

      <Clock /> {/* Komponen Jam */}
      <InternetSpeed /> {/* Komponen Kecepatan Internet */}
    </div>
  );
};

export default Dashboard;
