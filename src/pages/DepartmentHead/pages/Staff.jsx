import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BadgeCheck, Filter, UserPlus } from "lucide-react";
import AddUser from "../Staff/AddUser";
import StaffInfo from "../Staff/StaffInfo"; 
import userImage from "../../../images/user.png";

const staffData = [
  {
    id: 1,
    name: "Van Ian Mora",
    email: "moravg@registrar.national-u.edu.ph",
    avatar: userImage,
  },
  {
    id: 2,
    name: "Neil Escote",
    email: "escote@registrar.national-u.edu.ph",
    avatar: userImage,
  },
  {
    id: 3,
    name: "Maureen Cruzada",
    email: "cruzada@registrar.national-u.edu.ph",
    avatar: userImage,
  },
  {
    id: 4,
    name: "Shaira Tayag",
    email: "tayag@registrar.national-u.edu.ph",
    avatar: userImage,
  },
];

const Staff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

  const styles = {
    staffContainer: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "10px",
    },
    searchBox: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      top: "175px",
      left: "1280px",
    
    },
    searchInput: {
      padding: "8px 12px",
      paddingRight: "30px",
      border: "1px solid #35408E",
      borderRadius: "20px",
      outline: "none",
      width: "200px",
      fontSize: "14px",
    },
    searchIcon: {
      position: "absolute",
      right: "10px",
      color: "#35408E",
      cursor: "pointer",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "10px",
      width: "100%",
    },
    viewButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: "170px",
      right: "10px",
      gap: "5px",
      border: "1px solid #35408E",
      padding: "6px 12px",
      height: "45px",
      marginRight: "290px",
      background: "white",
      color: "#35408E",
      position: "fixed",
      width: "110px",
    },
    viewButtonHover: {
      background: "#35408E",
      color: "white",
    },
    sortButton: {
      display: "flex",
      alignItems: "center",
      top: "170px",
      right: "10px",
      gap: "5px",
      border: "1px solid #35408E",
      padding: "6px 12px",
      height: "45px",
      marginRight: "160px",
      background: "white",
      color: "#35408E",
      position: "fixed",
      width: "110px",
    },
    sortButtonHover: {
      background: "#35408E",
      color: "white",
    },
    userIcon: {
      color: "#35408E",
      cursor: "pointer",
      position: "fixed",
      top: "175px",
      right: "110px",
      zIndex: "999",
    },
  };

  

  return (
    <div style={styles.staffContainer}>

    <style>
      {`
        input::placeholder {
          color: black;
        }
      `}
    </style>

      <div style={styles.searchBox}>
        <input type="text" placeholder="Search users" style={styles.searchInput} />
        <Search style={styles.searchIcon} size={18} />
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.viewButton}>
          <BadgeCheck size={18} />
          View
        </button>
        <button style={styles.sortButton}>
          <Filter size={18} />
          Sort By
        </button>
      </div>

      <StaffInfo staff={staffData} onEdit={(id) => navigate(`/staff/edit/${id}`)} />

      <UserPlus style={styles.userIcon} size={35} onClick={() => setIsModalOpen(true)} />

      {isModalOpen && <AddUser onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Staff;
