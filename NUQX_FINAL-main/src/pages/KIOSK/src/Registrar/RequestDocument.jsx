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
    navigate('/enrollment'); 
  };

  const generateQueueNumber = () => {
    const prefix = 'REQ';
    const lastNumber = parseInt(localStorage.getItem('lastQueueNumber') || '0');
    const newNumber = lastNumber + 1;
    localStorage.setItem('lastQueueNumber', newNumber);
    return `${prefix}${String(newNumber).padStart(3, '0')}`;
  };

  const handleSubmitClick = () => {
    const queueNumber = generateQueueNumber(); 
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  const handleModalSubmit = () => {
    const queueNumber = generateQueueNumber();
    navigate('/queue-num', { state: { queueNumber } }); 
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

      <div className="request-document-content">
        <h1 className="request-document-title">Request Document</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentId">
              Student ID <span className="required-asterisk">*</span>
            </label>
            <input 
              type="text" 
              id="studentId" 
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required-asterisk">*</span>
            </label>
            <input 
              type="text" 
              id="fullName" 
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input 
              type="text" 
              id="amount" 
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="documentType">
              Document Type <span className="required-asterisk">*</span>
            </label>
            <select 
              id="documentType"
              value={formData.documentType}
              onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
            >
              <option>Good Moral</option>
              <option>Certificate of Enrollment</option>
              <option>Transcript of Records</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="purpose">
              Purpose of Request <span className="required-asterisk">*</span>
            </label>
            <select 
              id="purpose"
              value={formData.purpose}
              onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            >
              <option>Others</option>
              <option>Requirements</option>
              <option>Employment</option>
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

      {showModal && (
        <Modal 
          isOpen={showModal} 
          onClose={closeModal} 
          details={formData} 
          queueNumber={generateQueueNumber()}
          onSubmit={handleModalSubmit} 
        />
      )}
    </div>
  );
}

export default RequestDocument;
