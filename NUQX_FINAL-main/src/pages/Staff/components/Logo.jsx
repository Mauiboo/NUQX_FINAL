import React from 'react';
import './logo.css'; 
import profileImg from '../../../../src/images/NULogo.png';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <div className="d-flex align-items-center justify-content-between">
            <div className="logo d-flex align-items-center">
                <img
                    src={profileImg}
                    alt="NU Logo"
                    className="h-[60px] w-auto" 
                />
              <h1 className="logo-text">
                NUQX
                </h1>
            </div>
            
        </div>
    );
}

export default Logo;