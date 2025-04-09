import React from 'react';
import "../base.css";
import "./Enrollment.css";
import { useNavigate } from 'react-router-dom';
import Logo from "../../../../images/NULogo.png";
import { FaPencilAlt, FaFolderOpen } from 'react-icons/fa';


function EnrollmentMain() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/kiosk');
  };

  const handleEnrollmentFormClick = () => { 
    navigate('/kiosk/enrollment-form');
  };

  const handleRequestDocumentClick = () => {
    navigate('/kiosk/request-document');
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
      <div className="enrollment-content">
        <h1 className="enrollment-title">Hello,</h1>
        <h2 className="enrollment-subtitle">What will you do today?</h2>

        <div className="enrollment-buttons">
          <button className="enrollment-button" onClick={handleEnrollmentFormClick}> {/* Used handleEnrollmentFormClick */}
            <FaPencilAlt className="enrollment-icon" />
            <span className="enrollment-button-text">Enrollment</span>
          </button>
          <button className="enrollment-button" onClick={handleRequestDocumentClick}>
            <FaFolderOpen className="enrollment-icon" />
            <span className="enrollment-button-text">Request Document</span>
          </button>
        </div>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>
    </div>
  );
}

export default EnrollmentMain;