import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import "./StaffInfo.css"; 
import EditUser from "./EditUser"; 
import user from "../../../images/user.png"; 


const StaffInfo = ({ staff }) => {
  const [selectedImage, setSelectedImage] = useState(user);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <div className="staff-list">
      {staff.map((user) => (
        <div key={user.id} className="staff-card">
          <div className="avatar-container">
           <img src={selectedImage} alt="Profile" className="modal-avatar-img1" />
          </div>
          <div className="staff-details">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
          <div className="button-group">
            <button className="edit-button" onClick={() => handleEditClick(user)}>
              <Edit size={16} /> Edit
            </button>
            <button className="delete-button">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>
      ))}

      {isEditModalOpen && selectedUser && (
        <EditUser user={selectedUser} onClose={() => setIsEditModalOpen(false)} />
      )}
    </div>
  );
};

export default StaffInfo;
