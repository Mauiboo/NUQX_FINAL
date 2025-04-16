import React from 'react';
import "../base.css";
import "./Accounting.css";

import { useNavigate } from 'react-router-dom';
import Logo from '../../../../images/NULogo.png';
import { FaCreditCard } from 'react-icons/fa';

function AccountingMain() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/kiosk');
  };

  const handlePaymentClick = () => {
    navigate('/kiosk/payment'); 
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="header-title">NUQX</span>
        </div>
      </header>
      <div className="yellow-line"></div>

      <div className="back-button-container">
        <button className="back-button" onClick={handleBackClick}>
          BACK
        </button>
      </div>

      <div className="accounting-content">
        <h1 className="accounting-title">Hello,</h1>
        <h2 className="accounting-subtitle">What will you do today?</h2>

        <div className="accounting-buttons">
          <button className="accounting-button" onClick={handlePaymentClick}>
            <FaCreditCard className="accounting-icon" />
            <span className="accounting-button-text">Payment</span>
          </button>
        </div>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>
     
    </div>
  );
}

export default AccountingMain;