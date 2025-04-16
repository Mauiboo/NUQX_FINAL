import React from 'react';
import "../base.css";
import "./QueueNum.css";
import Logo from '../../../../images/NULogo.png';
import { useNavigate, useLocation } from 'react-router-dom';

function QueueNum() {
  const navigate = useNavigate();
  const location = useLocation();

  const queueNumber = location.state?.queueNumber || 'ENR000'; 

  const handleDoneClick = () => {
    navigate('/'); 
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

      <div className="queue-num-container">
        <h1 className="queue-num-title">Thank you for using NUQX!</h1>
        <div className="ticket-number-box">
          <p className="ticket-number-label">Your Ticket Number Is</p>
          <p className="ticket-number">{queueNumber}</p> 
        </div>
        <button className="done-button" onClick={handleDoneClick}>DONE</button>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>
    </div>
  );
}

export default QueueNum;
