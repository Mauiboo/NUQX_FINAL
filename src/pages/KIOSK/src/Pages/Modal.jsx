import React from 'react';
import './Modal.css';
import Logo from '../../../../images/NULogo.png';
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose, details }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleModalSubmit = () => {
        navigate('/kiosk/queue-num'); // Changed from '/queue-num'
    };

    const handleCancelClick = () => {
        onClose(); // Close the modal
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Confirm</h2>
                    <img src={Logo} alt="School Logo" className="modal-logo" />
                </div>
                <div className="modal-body">
                    <p>Name: {details.fullName}</p>
                    <p>Student ID: {details.studentId}</p>
                    <p>Program: {details.program}</p> {/* Added Program Field */}
                    <p>Concern: {details.concern}</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-cancel" onClick={handleCancelClick}>Cancel</button>
                    <button className="modal-submit" onClick={handleModalSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
