import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../base.css";
import './RequestDocument.css'; 
import Logo from '../../../../images/NULogo.png'; 
import Modal from '../Pages/Modal'; 

function RequestDocument() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Maureen Jae A. Cruzada',
    studentId: '2022-105905',
    amount: '₱100.00',
    documentType: 'Good Moral',
    purpose: 'Others',
    additionalNotes: ''
  });

  const handleBackClick = () => {
    navigate('/kiosk/enrollment'); 
  };

  const handleSubmitClick = () => {
    setShowModal(true);
    console.log(formData);
    
  };

  const closeModal = () => {
    setShowModal(false);
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

      {/* Main Content */}
      <div className="request-document-content">
        <h1 className="request-document-title">Request Document</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input 
              type="text" 
              id="studentId" 
              defaultValue="2022-105905" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name*</label>
            <input 
              type="text" 
              id="fullName" 
              defaultValue="Maureen Jae A. Cruzada" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input 
              type="text" 
              id="amount" 
              defaultValue="₱100.00" 
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="documentType">Document Type*</label>
            <select id="documentType">
              <option>Good Moral</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">Purpose of Request*</label>
            <select id="purpose">
              <option>Others</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes</label>
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

      {/* Modal connected to formData */}
      <Modal 
        isOpen={showModal} 
        onClose={closeModal} 
        details={formData} 
      />
    </div>
  );
}

export default RequestDocument;
