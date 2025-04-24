import React from 'react';
import "../base.css";
import Logo from "../../../../images/NULogo.png";
import { useNavigate } from 'react-router-dom';

function QueueNum() {
  const navigate = useNavigate();

  const handleDoneClick = () => {
    navigate('/kiosk'); 
  };

  const styles = {
    header: {
      backgroundColor: "#35408E",
      height: "80px",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "90px",
      marginRight: "10px",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontSize: "35px",
      fontFamily: "'ClanOT Medium', sans-serif",
    },
    yellowLine: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "100%",
    },
    footer: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#35408E",
      height: "75px",
    },
  };

  return (
    <div className="page-container" style={{ overflow: 'hidden', position: 'fixed', width: '100%', height: '100vh' }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={Logo} alt="Logo" style={styles.logo} />
          <span style={styles.headerTitle}>NUQX</span>
        </div>
      </header>

      {/* Yellow line */}
      <div style={styles.yellowLine}></div>

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
          borderRadius: '25px',
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

      {/* Bottom Yellow Line */}
      <div
        style={{
          height: "8px",
          backgroundColor: "#FFD41C",
          position: "absolute",
          bottom: "70px",
          left: "0",
          width: "100%",
          zIndex: 99
        }}
      ></div>

      {/* Footer */}
      <footer style={styles.footer}></footer>
    </div>
  );
}

export default QueueNum;
