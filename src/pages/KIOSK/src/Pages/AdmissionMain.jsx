import React from 'react';
import "../base.css";
import "./Admission.css"; 
import { useNavigate } from 'react-router-dom'; 
import Logo from "../../../../images/NULogo.png"; 
import { FaUser, FaQuestionCircle } from 'react-icons/fa'; 

function AdmissionMain() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/kiosk');
  };

  const handleApplicationClick = () => {
    navigate('/kiosk/application');
  };

  const handleInquiryClick = () => {
    navigate('/kiosk/inquiry');
  };

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

      {/* Back Button */}
      <div className="back-button-container"> 
        <button className="back-button" onClick={handleBackClick}>
          BACK
        </button>
      </div>

      {/* Main Content */}
      <div className="admission-content">
        <h1 className="admission-title">Hello,</h1>
        <h2 className="admission-subtitle">What will you do today?</h2>

        <div className="admission-buttons">
          <button className="admission-button" onClick={handleApplicationClick}>
            <FaUser className="admission-icon" />
            <span className="admission-button-text">Application</span>
          </button>
          <button className="admission-button" onClick={handleInquiryClick}>
            <FaQuestionCircle className="admission-icon" />
            <span className="admission-button-text">Inquiry</span>
          </button>
        </div>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>
    </div>
  );
}

export default AdmissionMain;