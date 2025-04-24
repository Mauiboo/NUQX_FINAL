import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaFileInvoiceDollar, FaGraduationCap, FaFolderOpen } from "react-icons/fa"; 
import Logo from '../../../../images/NULogo.png'; 
import Modal from './Modal'; 

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsModalOpen(true); 
  };

  const handleBack = () => {
    navigate('/'); 
  };

  const handleModalClose = () => {
    setIsModalOpen(false); 
  };

  const userDetails = {
    fullName: "John Doe",
    studentId: "123456",
    program: "Computer Science",
    concern: "Inquiry about course enrollment",
  };

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
    footer: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#35408E",
      height: "75px",
    },
    buttonContainer: {
      marginTop: '70px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px'
    },
    actionButtons: {
      marginTop: '20px',
      textAlign: 'center'
    },
    actionButton: {
      borderRadius: '25px',
      padding: '10px 30px',
      fontSize: '18px',
      backgroundColor: '#35408E',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      margin: '0 10px',
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={Logo} alt="Logo" style={styles.logo} />
          <span style={styles.headerTitle}>NUQX</span>
        </div>
      </header>
      
      <div style={styles.yellowLine}></div>

      {/* Centered Titles */}
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 style={{ fontSize: '2rem', margin: '0' }}>Hello,</h1>
        <h2 style={{ fontSize: '1.5rem', margin: '0' }}>What will you do today?</h2>
      </div>

      {/* Button Container */}
      <div style={styles.buttonContainer}>
        <Link to="" className="icon-button">
          <FaPencilAlt className="icon" />
          <span className="button-text">Enrollment</span>
        </Link>
        <Link to="" className="icon-button">
          <FaFolderOpen className="icon" />
          <span className="button-text">Request Document</span>
        </Link>
        <Link to="" className="icon-button">
          <FaGraduationCap className="icon" />
          <span className="button-text">Application</span>
        </Link>
        <Link to="" className="icon-button">
          <FaFileInvoiceDollar className="icon" />
          <span className="button-text">Payment</span>
        </Link>
        <Link to="" className="icon-button">
          <FaFolderOpen className="icon" />
          <span className="button-text">Inquiry</span>
        </Link>
      </div>

      <div className="action-buttons">
          <button 
            className="action-button" 
            onClick={handleSubmit} 
            style={{
              width: '150px',
              height: '50px',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#35408E',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              margin: '0 10px'
            }}
          >
            Submit
          </button>

          <button 
            className="action-button" 
            onClick={handleBack} 
            style={{
              width: '150px',
              height: '50px',
              fontSize: '16px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#FFD41C',
              color: '#35408E',
              border: 'none',
              cursor: 'pointer',
              margin: '0 10px'
            }}
          >
            Back
          </button>
        </div>

      <div style={{ backgroundColor: "#FFD41C",
        height: "8px",
        width: "100%",
        position: "absolute",
        bottom: 70,
        left: 0,
        zIndex: 99 }}></div>

      {/* Footer */}
      <footer style={styles.footer}></footer>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose} details={userDetails} />
    </div>
  );
}

export default MainPage;
