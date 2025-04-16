import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sideBar.css';
import { 
  RiBarChartFill, 
  RiFileListLine, 
  RiDashboardLine, 
  RiTeamLine, 
  RiSettings4Line, 
  RiLogoutCircleLine 
} from 'react-icons/ri'; 
import { MdOutlineQueuePlayNext } from "react-icons/md";
import Modal from './Modal';

function SideBar() {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    window.close();
    navigate('/login');
    setShowLogoutConfirm(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/staff/managequeue" className="nav-link">
            <MdOutlineQueuePlayNext className="me-2" />
            <span>Manage Queue</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/staff/reports" className="nav-link">
            <RiFileListLine className="me-2" />
            <span>Reports</span>
          </Link>
        </li>

        <li className="yellow-divider-container">
          <div className="yellow-divider"></div>
        </li>
        
        <li className="nav-item">
          <Link to="/staff/settings" className="nav-link">
            <RiSettings4Line className="me-2" />
            <span>Settings</span>
          </Link>
        </li>

        <li className="nav-item logout">
          <button onClick={handleLogoutClick} className="nav-link logout-button">
            <RiLogoutCircleLine className="me-2" />
            <span>Logout</span>
          </button>
        </li>
      </ul>

      <Modal 
        show={showLogoutConfirm} 
        onClose={handleCancelLogout} 
        onConfirm={handleConfirmLogout} 
      />
    </aside>
  );
}

export default SideBar;