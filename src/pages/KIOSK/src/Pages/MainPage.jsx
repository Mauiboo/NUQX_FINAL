import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css";
import "../base.css";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaFileInvoiceDollar, FaGraduationCap } from "react-icons/fa"; 
import Logo from '../../../../images/NULogo.png'; 

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" /> 
          <span className="header-title">NUQX</span>
        </div>
      </header>
      <div className="yellow-line"></div>
      

      <div className="button-container">
      <Link to="/kiosk/enrollment" className="icon-button">
        <FaPencilAlt className="icon" />
        <span className="button-text">Registrar</span>
      </Link>
      <Link to="/kiosk/accounting" className="icon-button">
        <FaFileInvoiceDollar className="icon" />
        <span className="button-text">Accounting</span>
      </Link>
      <Link to="/kiosk/admission" className="icon-button">
        <FaGraduationCap className="icon" />
        <span className="button-text">Admission</span>
      </Link>
    </div>

    <div className="yellow-line1"></div>
<footer className="footer"></footer>


    </div>
  );
}

export default MainPage;