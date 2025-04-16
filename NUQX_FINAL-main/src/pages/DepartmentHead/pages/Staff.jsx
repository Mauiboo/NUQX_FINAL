import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BadgeCheck, Filter, UserPlus } from "lucide-react";
import AddUser from "../Staff/AddUser";
import StaffInfo from "../Staff/StaffInfo"; 
import "./Staff.css";
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

  return (
    <div className="staff-container">
      <div className="search-box">
        <input type="text" placeholder="Search users" className="search-input" />
        <Search className="search-icon" size={18} />
      </div>

      <div className="button-container">
        <button className="view-button">
          <BadgeCheck size={18} />
          View
        </button>
        <button className="sort-button">
          <Filter size={18} />
          Sort By
        </button>
      </div>

      <StaffInfo staff={staffData} onEdit={(id) => navigate(`/staff/edit/${id}`)} />

      <UserPlus className="user-icon" size={35} onClick={() => setIsModalOpen(true)} />

      {isModalOpen && <AddUser onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Staff;