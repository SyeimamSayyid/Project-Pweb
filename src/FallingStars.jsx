import React from "react";
import "./FallingStars.css"; // CSS untuk animasi bintang jatuh

const FallingStars = () => {
  return (
    <div className="night">
      {/* Bintang */}
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      {/* Tautan */}
      <a
        target="_blank"
        href="https://gosnippets.com"
        rel="noopener noreferrer"
        className="white-mode"
      >
      </a>
    </div>
  );
};

export default FallingStars;
