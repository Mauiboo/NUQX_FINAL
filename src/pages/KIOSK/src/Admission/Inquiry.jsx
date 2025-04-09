import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inquiry.css'; 
import Modal from '../Pages/Modal'; 
import Logo from '../../../../images/NULogo.png'; 

function Inquiry() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({

    selectedCategory: '',  
  });

  const handleBackClick = () => {
    navigate('/kiosk/admission');
  };

  const handleCategoryClick = (category) => {
    // Update the formData with the selected category
    setFormData({ ...formData, selectedCategory: category });
    console.log(`Category selected: ${category}`);
  };

  const handleOthersClick = () => {
    setFormData({ ...formData, selectedCategory: 'Others' });
    console.log('Navigating to "Others" category');
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

      {/* Main Content */}
      <div className="inquiry-content">
        <h1 className="inquiry-title">Hello,</h1>
        <p className="inquiry-subtitle">Please select the category of your question.</p>

        <div className="category-buttons">
          <button className="category-button" onClick={() => handleCategoryClick('Enrollment & Admissions')}>
            Enrollment & Admissions
          </button>
          <button className="category-button" onClick={() => handleCategoryClick('Campus Facilities')}>
            Campus Facilities
          </button>
          <button className="category-button" onClick={() => handleCategoryClick('Payment & Fees')}>
            Payment & Fees
          </button>
          <button className="category-button" onClick={() => handleCategoryClick('Scholarships')}>
            Scholarships
          </button>
          <button className="category-button" onClick={() => handleCategoryClick('Document Requests')}>
            Document Requests
          </button>
          <button className="category-button" onClick={() => handleCategoryClick('General Concerns')}>
            General Concerns
          </button>
        </div>

        <div className="others-section">
          <p className="others-text">Didn't find your question? Please go to "Others".</p>
          <button className="others-button" onClick={handleOthersClick}>
            OTHERS
          </button>
        </div>

        <div className="form-actions">
          <button className="inquiry-back-button" onClick={handleBackClick}>
            BACK
          </button>
          <button className="inquiry-submit-button" onClick={handleSubmitClick}>
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

export default Inquiry;
