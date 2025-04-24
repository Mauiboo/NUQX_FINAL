import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import NULogo from "../images/NULogo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "salvatored@registrar.national-u.edu.ph" && password === "1234") {
      navigate("/staff/manage-queue");
    } else if (email === "student_guest@kiosk.national-u.edu.ph" && password === "1234") {
      navigate("/kiosk");
    } else if (email === "monitor@display.national-u.edu.ph" && password === "1234") {
      navigate("/monitordisplay");
    } else if (email === "petrovak@departmenthead.national-u.edu.ph" && password === "1234") {
      navigate("/departmenthead/dashboard");
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Invalid credentials!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    pageContainer: {
      overflow: "hidden",
      position: "fixed",
      width: "100%",
      height: "100vh",
    },
    header: {
      backgroundColor: "#35408E",
      height: "80px",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: "90px",
      marginRight: "10px",
    },
    headerTitle: {
      color: "#FFFFFF",
      fontSize: "35px",
      fontFamily: "'ClanOT Medium', sans-serif",
    },
    yellowLine: {
      backgroundColor: "#FFD41C",
      height: "8px",
      width: "100%",
    },
    footer: {
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "#35408E",
      height: "70px",
    },
    mainContent: {
      margin: '0 auto',
      padding: '20px 0',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 160px)' 
    },
    loginContainer: {
      maxWidth: '600px',
      width: '70%',
      padding: '70px 60px',
      backgroundColor: 'white',
      borderRadius: '30px',
      border: '1px solid #35408E',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
    },
    passwordToggleStyle: {
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: '#666666',
      background: 'none',
      border: 'none',
      padding: '0',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={NULogo} alt="NU Logo" style={styles.logo} />
          <span style={styles.headerTitle}>NUQX</span>
        </div>
      </header>
      <div style={styles.yellowLine}></div>
      
      <div style={styles.mainContent}>
      <div style={styles.loginContainer}>
      <h2 className="welcome-text" style={{ fontSize: '38px', marginBottom: '40px', textAlign: 'center' }}>Welcome to NUQX</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group" style={{ marginBottom: '30px' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                style={{ 
                  width: '100%', 
                  boxSizing: 'border-box',
                  height: '65px',
                  fontSize: '20px',
                  borderRadius: '25px'
                }}
              />
            </div>
            <div className="input-group" style={{ marginBottom: '40px' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  style={{ 
                    width: '100%', 
                    boxSizing: 'border-box', 
                    paddingRight: '80px',
                    cursor: 'text',
                    position: 'relative',
                    zIndex: 1,
                    height: '65px',
                    fontSize: '20px',
                    borderRadius: '25px'
                  }}
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  style={{
                    ...styles.passwordToggleStyle,
                    zIndex: 2,
                    width: '70px',
                    right: '20px',
                    pointerEvents: 'auto',
                    fontSize: '18px'
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button 
              type="submit" 
              style={{ 
                borderRadius: '25px',
                fontSize: '22px',
                height: '65px',
                marginBottom: '30px'
              }}
            >
              Log in
            </button>
            <div className="forgot-password" style={{ textAlign: 'center', buttonHover: 'blue', fontSize: '18px' }}>
              <a href="#">Forgot Password</a>
            </div>
          </form>
        </div>
      </div>

      <div className="yellow-line1"></div>
      <footer style={styles.footer}></footer>
    </div>
  );
};

export default Login;