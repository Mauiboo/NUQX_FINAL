import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css'; 
import Logo from '../../../../images/NULogo.png'; 
import Modal from '../Pages/Modal'; 

function Payment() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    paymentType: 'tuition',
    paymentMethod: 'cash',
    amount: '',
    department: 'Accounting',
    concern: 'Payment Tuition',
  });

  const handleBackClick = () => {
    navigate('/accounting'); 
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
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

      <div className="payment-form-content">
        <h1 className="payment-form-title">Payment</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="paymentType">Payment Type <span className="required-asterisk">*</span></label>
            <select id="paymentType" value={formData.paymentType} onChange={handleChange}>
              <option value="tuition">Tuition</option>
              <option value="misc">Miscellaneous</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="studentId">Student ID <span className="required-asterisk">*</span></label>
            <input type="text" id="studentId" value={formData.studentId} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name <span className="required-asterisk">*</span></label>
            <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method <span className="required-asterisk">*</span></label>
            <select id="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
              <option value="cash">Cash</option>
              <option value="card">Credit Card</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount <span className="required-asterisk">*</span></label>
            <input type="text" id="amount" value={formData.amount} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes</label>
          <textarea id="additionalNotes" rows="4" onChange={handleChange} />
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

export default Payment;
