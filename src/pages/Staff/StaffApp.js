import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './StaffApp.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar'; 
import Reports from './pages/Reports';
import Managequeue from './pages/Managequeue';
import Settings from './pages/Settings';
import NULogo from "../../../src/images/NULogo.png";
import userImage from "../../../src/images/user.png";
import { RiEyeLine, RiEyeOffLine, RiCameraLine } from "react-icons/ri";

function StaffApp() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(true);
  const [windowNumber, setWindowNumber] = useState('');
  const [selectedWindow, setSelectedWindow] = useState('');

  const windowOptions = [1, 2, 3, 4, 5]; 

  useEffect(() => {
    setShowDialog(true);
  }, []);

  const handleConfirm = () => {
    setWindowNumber(selectedWindow);
    setShowDialog(false);
    navigate('/staff/managequeue');
  };

  return (
    <div className='flex h-screen bg-white text-gray-900 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-white opacity-100' />
      </div>

      {showDialog && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            width: '400px',  
            fontFamily: 'Clan OT, sans-serif'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ fontSize: '22px', color: '#35408E' }}>Select Window Number</h2>
              <img src={NULogo} alt="NU Logo" style={{ height: '50px', width: 'auto' }} />
            </div>
            <div style={{ marginTop: '20px' }}>
              <label htmlFor="window-select" style={{ fontSize: '16px', color: '#35408E', marginBottom: '10px', display: 'block' }}>Choose Window Number:</label>
              <select 
                id="window-select" 
                value={selectedWindow} 
                onChange={(e) => setSelectedWindow(e.target.value)} 
                style={{
                  width: '100%',
                  height: '40px', 
                  fontSize: '18px', 
                  padding: '8px',
                  border: '2px solid #35408E',
                  borderRadius: '10px',
                  marginTop: '10px'
                }}
              >
                <option value="">Select a window number</option>
                {windowOptions.map((num) => (
                  <option key={num} value={num}>Window {num}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
              <button 
                style={{
                  backgroundColor: 'transparent',
                  color: '#35408E',
                  border: 'none',
                  padding: '10px 20px',
                  fontSize: '18px', 
                  cursor: 'pointer',
                  borderRadius: '20px',
                  width: '45%' 
                }} 
                onClick={() => setSelectedWindow('')}
              >
                Clear
              </button>
              <button 
                style={{
                  backgroundColor: 'transparent',
                  color: '#35408E',
                  border: 'none',
                  padding: '10px 20px',
                  fontSize: '18px', 
                  cursor: 'pointer',
                  borderRadius: '20px',
                  width: '45%',
                  opacity: selectedWindow ? '1' : '0.5',
                  pointerEvents: selectedWindow ? 'auto' : 'none'
                }} 
                onClick={handleConfirm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
        
      <>
        <Header />
        <SideBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/staff/managequeue" />} />
            <Route path="/managequeue" element={<Managequeue windowNumber={windowNumber} />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </>
    </div>
  );
}

export default StaffApp;
