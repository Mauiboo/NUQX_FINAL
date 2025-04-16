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
import { SomeIcon } from 'lucide-react';
import { RiSomeIcon } from 'react-icons/ri';
import NULogo from "../../../src/images/NULogo.png";
import userImage from "../../../src/images/user.png";
import { RiEyeLine, RiEyeOffLine, RiCameraLine } from "react-icons/ri";

function StaffApp() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(true);
  const [windowNumber, setWindowNumber] = useState('');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setShowDialog(true);
  }, []);

  const handleConfirm = () => {
    setWindowNumber(inputText);
    setShowDialog(false);
    navigate('/staff/managequeue');
  };

  return (
    <div className='flex h-screen bg-white text-gray-900 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-white opacity-100' />
      </div>

      {showDialog ? (
        // Window Number Dialog
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
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '5px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
            width: '400px',
            fontFamily: 'Clan OT, sans-serif',
            position: 'relative',
            overflow: 'visible',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ color: '#35408E', fontSize: '40px', marginBottom: '5px', marginLeft: '30px' }}>Enter your</div>
            <div style={{ color: '#35408E', fontSize: '40px', marginBottom: '5px', marginLeft: '30px' }}>Window</div>
            <div style={{ color: '#35408E', fontSize: '40px', marginBottom: '20px', marginLeft: '30px' }}>Number</div>
            <input 
              type="text" 
              value={inputText} 
              onChange={(e) => setInputText(e.target.value)}
              style={{ 
                width: '80%',
                height: '40px', 
                fontSize: '20px', 
                border: '2px solid #35408E',
                marginBottom: '60px',
                padding: '5px 10px',
                boxSizing: 'border-box',
                borderRadius: '10px',
                alignSelf: 'center',
                textAlign: 'center'
              }} 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleConfirm();
                }
              }}
            />
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              marginTop: '-30px',
              marginRight: '40px'
            }}>
              <button 
                onClick={handleConfirm}
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#35408E', 
                  border: 'none',
                  padding: '8px 16px',
                  fontSize: '25px',
                  fontFamily: 'Clan OT, sans-serif',
                  cursor: 'pointer',
                  borderRadius: '20px',
                  transition: 'background-color 0.3s',
                  width: '80px',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#35408E40'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Show the full app with Routes
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
      )}
    </div>
  );
}

export default StaffApp;