// Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, onClose, onConfirm }) => {
  const navigate = useNavigate();
  
  if (!show) return null;

  const handleConfirm = () => {

    localStorage.removeItem('user');
    localStorage.removeItem('token');

    if (onConfirm) {
      onConfirm();
    }
    
    navigate('/');
  };

  return (
    <div className="modal-overlay" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000 
    }}>
      <div className="modal-content" style={{ 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        padding: '20px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        width: '400px', 
        height: '100px',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <p className="modal-message" style={{ textAlign: 'center', margin: '0 0 20px 0' }}>Are you sure you want to log out?</p>
        <div className="modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', width: '100%' }}>
          <button 
            className="modal-cancel" 
            onClick={onClose} 
            style={{ 
              color: '#35408E', 
              backgroundColor: 'transparent', 
              border: 'none',
              marginRight: '30px',
              bottom: '70%',
              position: 'relative',
              cursor: 'pointer',
              padding: '0px 2px',
              borderRadius: '8px',
              fontSize: '16px',
              lineHeight: '1',
              transition: 'all 0.3s',
              width: 'fit-content',
              height: 'fit-content'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#35408E70';
              e.target.style.borderRadius = '8px';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >No</button>
          <button 
            className="modal-submit" 
            onClick={handleConfirm} 
            style={{ 
              color: '#35408E', 
              backgroundColor: 'transparent', 
              border: 'none',
              bottom: '70%',
              position: 'relative',
              cursor: 'pointer',
              padding: '0px 2px',
              margin: '0',
              borderRadius: '8px',
              fontSize: '16px',
              lineHeight: '1',
              transition: 'all 0.3s',
              width: 'fit-content',
              height: 'fit-content'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#35408E70';
              e.target.style.borderRadius = '8px';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >Yes</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

export default Modal;