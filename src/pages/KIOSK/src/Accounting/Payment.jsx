import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css'; 
import Logo from '../../../../images/NULogo.png'; 
import Modal from '../Pages/Modal'; 

function Payment() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Maureen Jae A. Cruzada',
    studentId: '2022-105905',
    department: 'Accounting',
    concern: 'Payment Tuition',
  });

  const handleBackClick = () => {
    navigate('/kiosk/accounting'); 
  };

  const handleSubmitClick = () => {
    setShowModal(true);
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

      {/* Main Content (Changed to Payment) */}
      <div className="payment-form-content">
        <h1 className="payment-form-title">Payment</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="paymentType">Payment Type*</label>
            <select id="paymentType">
              <option value="tuition">Tuition</option>
              <option value="misc">Miscellaneous</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="studentId">Student ID*</label>
            <input type="text" id="studentId" defaultValue="2022-105905" />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name*</label>
            <input type="text" id="fullName" defaultValue="Maureen Jae A. Cruzada" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method*</label>
            <select id="paymentMethod">
              <option value="cash">Cash</option>
              <option value="card">Credit Card</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount*</label>
            <input type="text" id="amount" defaultValue="P6, 100.00" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes</label>
          <textarea id="additionalNotes" rows="4"></textarea>
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

      <Modal isOpen={showModal} onClose={closeModal} details={formData} />
    </div>
  );
}

export default Payment;