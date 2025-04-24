import React from 'react';
import profileImg from '../../../../src/images/NULogo.png';

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 1,
  };

  const logoTextStyle = {
    color: 'white',
    lineHeight: 1.1,
    fontSize: '35px',
    margin: '0',
    fontWeight: '200',
  };

  const imageStyle = {
    maxHeight: '100px',
    marginRight: '6px',
  };

  return (
    <div style={logoStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={profileImg}
          alt="NU Logo"
          style={imageStyle}
        />
        <h1 style={logoTextStyle}>
          NUQX
        </h1>
      </div>
    </div>
  );
}

export default Logo;
