import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Application.css"; 
import Logo from '../../../../images/NULogo.png';
import Modal from '../Pages/Modal'; 

function Application() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    academicYear: '2024-2025',
    academicTerm: '3rd Term',
    applyingFor: 'Undergraduate',
    academicProgram: 'Bachelor of Science in Accountancy',
    additionalNotes: '',
  });

  const handleBackClick = () => {
    navigate("/admission");
  };

  const handleSubmitClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

      <div className="application-content">
        <h1 className="application-title">Application</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="academicYear">Academic Year <span className="required-asterisk">*</span></label>
            <select 
              id="academicYear" 
              value={formData.academicYear} 
              onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
            >
              <option>2024-2025</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="academicTerm">Academic Term <span className="required-asterisk">*</span></label>
            <select 
              id="academicTerm" 
              value={formData.academicTerm} 
              onChange={(e) => setFormData({ ...formData, academicTerm: e.target.value })}
            >
              <option>3rd Term</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="applyingFor">Applying For <span className="required-asterisk">*</span></label>
            <select 
              id="applyingFor" 
              value={formData.applyingFor} 
              onChange={(e) => setFormData({ ...formData, applyingFor: e.target.value })}
            >
              <option>Undergraduate</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="academicProgram">Academic Program <span className="required-asterisk">*</span></label>
            <select 
              id="academicProgram" 
              value={formData.academicProgram} 
              onChange={(e) => setFormData({ ...formData, academicProgram: e.target.value })}
            >
              <option>Bachelor of Science in Accountancy</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea 
            id="additionalNotes" 
            rows="4" 
            value={formData.additionalNotes} 
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
          />
        </div>

        <div className="form-actions">
          <button className="back-button" onClick={handleBackClick}>
            BACK
          </button>
          <button className="submit-button" onClick={handleSubmitClick}>
            SUBMIT
          </button>
        </div>
      </div>

      <div className="yellow-line1"></div>
      <footer className="footer"></footer>

      <Modal 
        isOpen={showModal} 
        onClose={closeModal} 
        details={formData} 
      />
    </div>
  );
}

export default Application;
