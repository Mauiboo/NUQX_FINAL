import React, { useState } from "react";
import { FaClipboardList, FaEdit, FaTimes } from "react-icons/fa";
import "./Transaction.css";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [newTransaction, setNewTransaction] = useState({
    name: "",
    dateCreated: "",
    priorityList: "Low",
  });

  const generateId = (name) => {
    const words = name.split(" ").filter((word) => word.length > 0);
    let initials = "";

    if (words.length >= 3) {
      initials = words[0][0] + words[1][0] + words[2][0];
    } else if (words.length === 2) {
      initials = words[0][0] + words[1][0] + (words[1][1] || "");
    } else if (words.length === 1) {
      initials = words[0].slice(0, 3);
    }

    return initials.toUpperCase();
  };

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleEdit = (transaction) => {
    setIsEditing(true);
    setEditingTransaction(transaction);
  };

  const handleSaveEdit = () => {
    const updatedTransactions = transactions.map((t) => {
      if (t.id === editingTransaction.id) {
        return {
          ...editingTransaction,
          id: generateId(editingTransaction.name),
        };
      }
      return t;
    });

    setTransactions(updatedTransactions);
    setIsEditing(false);
    setEditingTransaction(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isAdding) {
      setNewTransaction({ ...newTransaction, [name]: value });
    } else if (isEditing) {
      setEditingTransaction({ ...editingTransaction, [name]: value });
    }
  };

  const handlePriorityChange = (priority) => {
    if (isAdding) {
      setNewTransaction({ ...newTransaction, priorityList: priority });
    } else if (isEditing) {
      setEditingTransaction({ ...editingTransaction, priorityList: priority });
    }
  };

  const handleAddTransaction = () => {
    const newId = generateId(newTransaction.name);
    setTransactions([
      ...transactions,
      {
        id: newId,
        ...newTransaction,
      },
    ]);

    setIsAdding(false);
    setNewTransaction({
      name: "",
      dateCreated: "",
      priorityList: "Low",
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditingTransaction(null);
  };

  return (
    <div className="container">
      <button className="addButton" onClick={handleAdd}>
        <FaClipboardList />
      </button>

      <div className="transactionContainer">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transactionCard">
            <div className="transactionCardContent">
              <h3 className="cardTitle">Transactions</h3>
              <div className="toggle">
                <input type="checkbox" id={`toggle-${transaction.id}`} />
                <label htmlFor={`toggle-${transaction.id}`}></label>
              </div>
              <p><strong>ID:</strong> {transaction.id}</p>
              <p><strong>Name:</strong> {transaction.name}</p>
              <p><strong>Date Created:</strong> {transaction.dateCreated}</p>
              <p><strong>Priority List:</strong> {transaction.priorityList}</p>
            </div>
            <button className="editButton" onClick={() => handleEdit(transaction)}>
              <FaEdit /> Edit
            </button>
          </div>
        ))}
      </div>

      {isAdding && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalHeader">
              <h2 className="modalTitle">Add Transaction</h2>
              <button className="closeButton" onClick={handleCancel}>
                <FaTimes />
              </button>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newTransaction.name}
              onChange={handleInputChange}
              className="input"
            />
            <input
              type="text"
              name="dateCreated"
              placeholder="Date Created"
              value={newTransaction.dateCreated}
              onChange={handleInputChange}
              className="input"
            />
            <div className="priority">
              <label style={{ fontSize: "16px" }}>Priority Status:</label>
              <button
                className={
                  newTransaction.priorityList === "High"
                    ? "priorityButtonActive"
                    : "priorityButton"
                }
                onClick={() => handlePriorityChange("High")}
              >
                High
              </button>
              <button
                className={
                  newTransaction.priorityList === "Low"
                    ? "priorityButtonActive"
                    : "priorityButton"
                }
                onClick={() => handlePriorityChange("Low")}
              >
                Low
              </button>
            </div>
            <div className="buttonContainer">
              <button className="addButton1" onClick={handleAddTransaction}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditing && (
        <div className="modal">
          <div className="modalContent">
            <div className="modalHeader">
              <h2 className="modalTitle">Edit Transaction</h2>
              <button className="closeButton" onClick={handleCancel}>
                <FaTimes />
              </button>
            </div>
            <input
              type="text"
              name="name"
              value={editingTransaction.name}
              onChange={handleInputChange}
              className="input"
            />
            <input
              type="text"
              name="dateCreated"
              value={editingTransaction.dateCreated}
              onChange={handleInputChange}
              className="input"
            />
            <div className="priority">
              <label style={{ fontSize: "16px" }}>Priority Status:</label>
              <button
                className={
                  editingTransaction.priorityList === "High"
                    ? "priorityButtonActive"
                    : "priorityButton"
                }
                onClick={() => handlePriorityChange("High")}
              >
                High
              </button>
              <button
                className={
                  editingTransaction.priorityList === "Low"
                    ? "priorityButtonActive"
                    : "priorityButton"
                }
                onClick={() => handlePriorityChange("Low")}
              >
                Low
              </button>
            </div>
            <button className="saveButton" onClick={handleSaveEdit}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;