import React, { useState } from "react";
import user from "../../../images/user.png";

const AddUser = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(user);

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "800px",
    background: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    zIndex: 1001,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "22px",
    cursor: "pointer",
    color: "#777",
  };

  const avatarContainerStyle = {
    position: "relative",
    marginBottom: "20px",
    textAlign: "center",
  };

  const avatarImageStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #3f51b5",
  };

  const uploadIconStyle = {
    position: "absolute",
    bottom: "0",
    right: "35%",
    fontSize: "17px",
    cursor: "pointer",
    backgroundColor: "#fff",
    borderRadius: "100%",
    padding: "5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };

  const formContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    gap: "20px",
    marginTop: "20px",
  };

  const columnStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const labelStyle = {
    marginBottom: "5px",
    fontWeight: "500",
    fontSize: "15px",
    color: "black",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 15px",
    borderRadius: "10px",
    border: "2px solid #3f51b5",
    fontSize: "16px",
    outline: "none",
    color: "black",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "30px",
  };

  const buttonStyle = {
    padding: "12px 24px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#35408E",
    boxShadow: "0px 4px 8px rgba(63, 81, 181, 0.3)",
    transition: "background 0.3s ease",
  };

  return (
    <div style={modalStyle}>
      <span style={closeButtonStyle} onClick={onClose}>
        &times;
      </span>

      <div style={avatarContainerStyle}>
        <img src={selectedImage} alt="Profile" style={avatarImageStyle} />
        <label htmlFor="upload-avatar" style={uploadIconStyle}>
          <i className="ri-camera-fill"></i>
        </label>
        <input
          type="file"
          id="upload-avatar"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      <div style={formContainerStyle}>
        <div style={columnStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              style={inputStyle}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Middle Name</label>
            <input
              type="text"
              placeholder="Enter middle name"
              style={inputStyle}
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              style={inputStyle}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div style={columnStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Default Password</label>
            <input
              type="password"
              placeholder="Enter password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              style={inputStyle}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div style={buttonGroupStyle}>
        <button style={buttonStyle}>Submit</button>
        <button style={buttonStyle} onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default AddUser;
