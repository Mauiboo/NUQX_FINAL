import React from "react";
import "./styles.css";
import NULogo from "../../../images/NULogo.png";

const MonitorDisplay = () => {
  return (
    <div className="page-container">
      <header className="header">
        <div className="logo-container">
          <img src={NULogo} alt="NU Logo" className="logo" />
          <span className="header-title">NUQX</span>
        </div>
      </header>
      <div className="yellow-line"></div>
      
      <div className="main-content">
        <div className="queue-container">
          <div className="left-section">
            <div className="serving-box">
              <div className="serving-header">
                Now Serving
              </div>
              <div className="serving-content">
                <div className="proceed-text">
                  PLEASE PROCEED TO:
                </div>
                <div className="window-box">
                  WINDOW 1
                </div>

                <div 
                  className="queue-number" 
                  style={{ marginTop: '0', paddingTop: '0' }}
                >
                  EN001
                </div>

              </div>
            </div>
          </div>
          
          <div className="right-section">
            <div className="window-container">
              <div className="window-box">
                WINDOW 2
              </div>
              <div className="queue-number">
                EN002
              </div>
            </div>
            
            <div className="horizontal-divider"></div>
            
            <div className="window-container">
              <div className="window-box">
                WINDOW 3
              </div>
              <div className="queue-number">
                EN003
              </div>
            </div>
            
            <div className="horizontal-divider"></div>
            
            <div className="window-container">
              <div className="window-box">
                WINDOW 4
              </div>
              <div className="queue-number">
                EN004
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="yellow-line1"></div>
      <footer className="footer"></footer>
    </div>
  );
};

export default MonitorDisplay;
