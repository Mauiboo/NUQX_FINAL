import React from "react";
import { useNavigate } from "react-router-dom";
import homepage from "../images/HomePage.svg";
import NULogo from "../images/NULogo.png";

function HomePage() {
  const navigate = useNavigate();
  
  const styles = {
    pageContainer: {
      overflow: "hidden",
      position: "fixed",
      width: "100%",
      height: "100vh",
    },
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
    yellowLine1: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "100%",
      position: "relative",
      marginTop: "-54px",
    },
    footer: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#35408E",
      height: "70px",
    },
    p1: {
      fontSize: "200px",
      color: "#2d3b8c",
      marginTop: "-120px",
      maxWidth: "700px",
      lineHeight: 1.4,
      position: "relative",
      marginLeft: "250px",
      top: "350px",
      fontWeight: "bold",
    },
    p: {
      fontSize: "40px",
      color: "#2d3b8c",
      marginTop: "-120px",
      maxWidth: "700px",
      lineHeight: 1.4,
      position: "relative",
      marginLeft: "250px",
      top: "470px",
    },
    homepageBtn: {
      marginTop: "20px",
      backgroundColor: "#2d3b8c",
      color: "white",
      border: "none",
      padding: "10px 30px",
      fontSize: "20px",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background-color 0.3s ease-in-out",
      textAlign: "center",
      position: "relative",
      marginLeft: "250px",
      top: "500px",
      width: "150px",
    },
    content: {
      position: "relative",
      top: "-70px",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={NULogo} alt="NU Logo" style={styles.logo} />
          <span style={styles.headerTitle}>NUQX</span>
        </div>
      </header>
      <div style={styles.yellowLine}></div>
      <div style={styles.content}>
      <img 
        src={homepage} 
        alt="Home Page" 
        style={{
          position: 'absolute',
          top: '290px',
          right: '300px',
          width: '500px',
        }} 
      />
      
        <div style={styles.p1}>
          NUQX
        </div>
       
        <div style={styles.p}>
          A Mobile and Web Application <br />
          Development of Queuing System for <br />
          National University Manila
        </div>

        <button 
          style={styles.homepageBtn} 
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
      </div>

      <div className="yellow-line1"></div>
      <footer style={styles.footer}></footer>
    </div>
  );
}

export default HomePage; 