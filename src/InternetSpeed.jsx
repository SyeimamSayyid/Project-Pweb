import React, { useState, useEffect } from 'react';
import './InternetSpeed.css'; 

const InternetSpeed = () => {
  const [speed, setSpeed] = useState(null);
  const [connectionType, setConnectionType] = useState(null);

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      setSpeed(connection.downlink); 
      setConnectionType(connection.effectiveType); 

      const updateConnectionInfo = () => {
        setSpeed(connection.downlink);
        setConnectionType(connection.effectiveType);
      };

      connection.addEventListener('change', updateConnectionInfo);

      return () => {
        connection.removeEventListener('change', updateConnectionInfo);
      };
    } else {
      setSpeed('Tidak didukung'); 
    }
  }, []);

  return (
    <div className="internet-speed">
      <h3>Kecepatan Internet</h3>
      {speed ? (
        <div>
          <p>Kecepatan: {speed} Mbps</p>
          <p>Tipe Koneksi: {connectionType}</p>
        </div>
      ) : (
        <p>Mendeteksi kecepatan...</p>
      )}
    </div>
  );
};

export default InternetSpeed;
