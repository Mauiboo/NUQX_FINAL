import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './sideBar.css';
import { 
  RiBarChartFill, 
  RiFileListLine, 
  RiDashboardLine, 
  RiTeamLine, 
  RiSettings4Line, 
  RiLogoutCircleLine,
  RiStackLine,
} from 'react-icons/ri';
import Modal from './Modal';

function SideBar() {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    navigate('/login'); 
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };
  
  return (
    <aside id="sidebar" className="sidebar">
      <div className="divider bottom"></div>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/departmenthead/dashboard" className="nav-link">
            <RiDashboardLine className="me-2" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/departmenthead/reports" className="nav-link">
            <RiBarChartFill className="me-2" />
            <span>Reports</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/departmenthead/transaction" className="nav-link">
          <RiFileListLine className="me-2" />
          <span>Transactions</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/departmenthead/services" className="nav-link">
            <RiStackLine className="me-2" />
            <span>Services</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/departmenthead/staff" className="nav-link">
            <RiTeamLine className="me-2" />
            <span>Staff</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/departmenthead/settings" className="nav-link">
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

      {showLogoutConfirm && (
        <Modal 
          show={showLogoutConfirm} 
          onClose={handleCancelLogout} 
          onConfirm={handleConfirmLogout} 
        />
      )}
    </aside>
  );
}
export default SideBar;
