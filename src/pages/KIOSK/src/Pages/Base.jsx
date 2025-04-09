import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import NULogo from "../../../src/images/NULogo.png";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" /> 
          <span className="header-title">NUQX</span>
        </div>
      </header>
      <div className="yellow-line"></div>
</div>
  );
}

export default MainPage;