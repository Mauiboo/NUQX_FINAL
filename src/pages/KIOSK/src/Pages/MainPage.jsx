import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import "../base.css";
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

      {/* Centered Titles */}
      <div className="text-center-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1 className="accounting-title" style={{ fontSize: '2rem', margin: '0' }}>Hello,</h1>
        <h2 className="accounting-subtitle" style={{ fontSize: '1.5rem', margin: '0' }}>What will you do today?</h2>
      </div>

      {/* Button Container */}
      <div
        className="button-container"
        style={{
          marginTop: '70px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}
      >
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
        <button className="action-button" onClick={handleSubmit}>Submit</button>
        <button className="action-button" onClick={handleBack}> Back</button>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>

      {/* Modal Component */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        details={userDetails} 
      />
    </div>
  );
}

export default MainPage;
