import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollmentForm.css';
import Logo from '../../../../images/NULogo.png';
import Modal from '../Pages/Modal';
import "../base.css";

function EnrollmentForm() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [queueNumber, setQueueNumber] = useState('');
  const [formData, setFormData] = useState({
    studentId: '2022-105905',
    lastName: 'Cruzada',
    firstName: 'Maureen Joe',
    studentType: 'Returning',
    yearLevel: '3rd Year',
    program: 'Bachelor of Science',
    additionalNotes: ''
  });

  const handleBackClick = () => {
    navigate('/enrollment');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmitClick = () => {
    const generateQueueNumber = () => {
      const prefix = 'ENR';
      const lastNumber = parseInt(localStorage.getItem('lastQueueNumber') || '0');
      const newNumber = lastNumber + 1;
      localStorage.setItem('lastQueueNumber', newNumber);
      return `${prefix}${String(newNumber).padStart(3, '0')}`;
    };

    const newQueueNumber = generateQueueNumber();
    setQueueNumber(newQueueNumber);
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalSubmit = () => {
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

      <div className="enrollment-form-content">
        <h1 className="enrollment-form-title">Enrollment</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentId">
              Student ID <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span className="required-asterisk">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="studentType">Student Type</label>
            <select
              id="studentType"
              value={formData.studentType}
              onChange={handleChange}
            >
              <option>Returning</option>
              <option>New</option>
              <option>Transferee</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="yearLevel">
              Year Level <span className="required-asterisk">*</span>
            </label>
            <select
              id="yearLevel"
              value={formData.yearLevel}
              onChange={handleChange}
            >
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="program">
              Program <span className="required-asterisk">*</span>
            </label>
            <select
              id="program"
              value={formData.program}
              onChange={handleChange}
            >
              <option>Bachelor of Science</option>
              <option>Bachelor of Arts</option>
              <option>BS Information Technology</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalNotes">Additional Notes</label>
          <textarea
            id="additionalNotes"
            rows="4"
            value={formData.additionalNotes}
            onChange={handleChange}
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
          details={{
            fullName: `${formData.firstName} ${formData.lastName}`,
            studentId: formData.studentId,
            program: formData.program,
            concern: `Enrollment - ${formData.studentType}, ${formData.yearLevel}${formData.additionalNotes ? ` | Notes: ${formData.additionalNotes}` : ''}`,
            queueNumber: queueNumber
          }}
          onSubmit={handleModalSubmit} // Pass the submit handler to the modal
        />
      )}
    </div>
  );
}

export default EnrollmentForm;
