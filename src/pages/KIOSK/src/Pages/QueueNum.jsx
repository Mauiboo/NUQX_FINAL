import React from 'react';
import "../base.css";
import Logo from "../../../../images/NULogo.png";
import { useNavigate } from 'react-router-dom';

function QueueNum() {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/kiosk'); 
  };

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header" style={{ height: '80px' }}>
          <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
          <span className="header-title">NUQX</span>
        </div>
      </header>
      <div className="yellow-line"></div>

    {/* Queue Number Content */}
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '85vh',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'relative',
      }}>
        <h1 style={{
          fontSize: '40px',
          color: '#333',
          marginBottom: '70px' 
        }}>Thank you for using NUQX!</h1>

        <div style={{
          backgroundColor: 'white',
          padding: '30px 100px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          textAlign: 'center',
          marginBottom: '70px' 
        }}>
          <p style={{
            fontSize: '50px',
            color: '#333',
            marginBottom: '0px' 
          }}>Your Ticket Number Is</p>
          <p style={{
            fontSize: '90px',
            fontWeight: 'bold',
            color: '#35408E'
          }}>EN001</p>
        </div>

        <button onClick={handleDoneClick} style={{
          backgroundColor: '#35408E',
          color: 'white',
          padding: '10px 40px',
          border: 'none',
          borderRadius: '4px',
          fontSize: '24px',
          cursor: 'pointer',
          width: '200px'
        }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#283069'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#35408E'}
        >
          DONE
        </button>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>
    </div>
  );
}

export default QueueNum;