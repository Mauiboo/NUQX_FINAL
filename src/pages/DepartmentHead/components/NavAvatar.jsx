import React from 'react';
import profileImg from '../../../../src/images/user.png';

function NavAvatar() {
  const containerStyle = {
    display: 'flex',
    backgroundColor: '#35408E',
    color: 'white',
    width: '300px',
    padding: '15px',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const imageStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '2px solid white',
    objectFit: 'cover',
    marginBottom: '-15px',
    marginRight: '30px',
  };

  const textInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'right',
    justifyContent: 'center',
    margin: '-0px',
    marginBottom: '-15px',
  };

  const nameStyle = {
    fontSize: '1.2rem',
    fontWeight: '200',
    color: 'white',
    margin: '0',
    textAlign: 'right',
  };

  const titleStyle = {
    fontSize: '1rem',
    color: 'white',
    margin: '0',
    textAlign: 'right',
  };

  return (
    <div style={containerStyle}>
      <div style={textInfoStyle}>
        <div style={nameStyle}>Klaus Mikaelson</div>
        <div style={titleStyle}>Head Department</div>
      </div>

      <img
        src={profileImg}
        alt="Profile"
        style={imageStyle}
      />
    </div>
  );
}

export default NavAvatar;
