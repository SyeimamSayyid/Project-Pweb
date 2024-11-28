import React, { useEffect, useState } from 'react';
import './Profil.css'; // Pastikan file CSS benar
import Header from './Komponen/Header'; // Pastikan path benar
import Clock from './Clock'; // Pastikan path benar

const ProfileCard = () => {
  // State untuk menyimpan data profil
  const [profile, setProfile] = useState({
    name: '',
    email: '',
  });


  return (
    <div className="dashboard-container">
      {/* Render Header dan Clock */}
      <Header />
      <Clock />

      <div className="card">
        <div className="title">Profil Mahasiswa</div>
        <div className="content">
          <p>
            <strong>Nama:AlfianEkaPutra</strong> {profile.name}
          </p>
          <p>
            <strong>Email:Fian@gmail.com</strong> {profile.email}
          </p>
        </div>
        <div className="step">Informasi</div>
      </div>
    </div>
  );
};

export default ProfileCard;
