import React from 'react';
import './Modal.css';
import Logo from '../../../../images/NULogo.png';
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose, details }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleModalSubmit = () => {
        navigate('/queue-num');
    };

    const handleCancelClick = () => {
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Confirm</h2>
                    <img src={Logo} alt="School Logo" className="modal-logo" />
                </div>

                <div className="modal-body">
                    {details.concern && details.concern.includes('Enrollment') ? (
                        <>
                            <p>Name: {details.fullName}</p>
                            <p>Student ID: {details.studentId}</p>
                            <p>Program: {details.program}</p>
                            <p>Concern: {details.concern}</p>
                        </>
                    ) : details.concern && details.concern.includes('Payment') ? (
                        <>
                            <p>Name: {details.fullName}</p>
                            <p>Student ID: {details.studentId}</p>
                            <p>Payment Type: {details.paymentType}</p>
                            <p>Payment Method: {details.paymentMethod}</p>
                            <p>Amount: {details.amount}</p>
                            <p>Concern: {details.concern}</p>
                        </>
                    ) : details.documentType ? (
                        <>
                            <p>Name: {details.fullName}</p>
                            <p>Student ID: {details.studentId}</p>
                            <p>Amount: {details.amount}</p>
                            <p>Document Type: {details.documentType}</p>
                            <p>Purpose: {details.purpose}</p>
                        </>
                    ) : details.selectedCategory ? (
                        <>
                            <p>Inquiry Category: {details.selectedCategory}</p>
                        </>
                    ) : (
                        <>
                            <p>Academic Year: {details.academicYear}</p>
                            <p>Academic Term: {details.academicTerm}</p>
                            <p>Applying For: {details.applyingFor}</p>
                            <p>Academic Program: {details.academicProgram}</p>
                            {details.additionalNotes && (
                                <p>Additional Notes: {details.additionalNotes}</p>
                            )}
                        </>
                    )}
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
