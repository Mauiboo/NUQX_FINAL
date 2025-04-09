import React from 'react';
import profileImg from '../../../../src/images/user.png';
import '../nav.css'; 

function NavAvatar() {
  return (
    <div className="nav-avatar-container">
     <div className="text-info" style={{ textAlign: 'center', marginBottom: '-30px' }}>
        <div className="nav-avatar-name">Damon Salvatore</div>
        <div className="nav-avatar-title">Registrar</div>
    </div>
  <img
    src={profileImg}
    alt="Profile"
    className="nav-avatar-img"
  />
</div>
  );
}

export default NavAvatar;