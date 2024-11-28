// Loader.js
import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader">
    <video autoPlay loop muted className="loader-video">
      <source src="/assets/Loading Page/RIM.mp4" type="video/mp4" />
      <p>Your browser does not support the video tag.</p>
    </video>
    <p>Harap Tunggu</p>
  </div>
);

export default Loader;
