import React from 'react';
import Logo from '../../../../images/NULogo.png';
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, onClose, details }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleModalSubmit = () => {
        navigate('/kiosk/queue-num');
    };

    const handleCancelClick = () => {
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px 30px',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                width: 'auto',
                height: 'auto',
                
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px',
                }}>
                    <h2 style={{
                        color: '#35408E',
                        fontSize: '32px',
                        fontWeight: 600,
                        margin: 0,
                    }}>Confirm</h2>
                    <img src={Logo} alt="School Logo" style={{ height: '80px' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <p style={{ margin: '10px 0', fontSize: '20px', lineHeight: 1.5 }}>
                        <strong>Name:</strong> {details.fullName}
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '20px', lineHeight: 1.5 }}>
                        <strong>Student ID:</strong> {details.studentId}
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '20px', lineHeight: 1.5 }}>
                        <strong>Program:</strong> {details.program}
                    </p>
                    <p style={{ margin: '10px 0', fontSize: '20px', lineHeight: 1.5 }}>
                        <strong>Concern:</strong> {details.concern}
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}>
                    <button onClick={handleCancelClick} style={{
                        padding: '12px 20px',
                        border: '1px solid #35408E',
                        borderRadius: '6px',
                        backgroundColor: 'transparent',
                        color: '#35408E',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 500,
                        width: '45%',
                    }}>Cancel</button>
                    <button onClick={handleModalSubmit} style={{
                        padding: '12px 20px',
                        border: 'none',
                        borderRadius: '6px',
                        backgroundColor: '#35408E',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 500,
                        width: '45%',
                    }}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
