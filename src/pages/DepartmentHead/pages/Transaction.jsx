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
    priorityList: "Not Priority",
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

  const handleAdd = () => setIsAdding(true);

  const handleEdit = (transaction) => {
    setIsEditing(true);
    setEditingTransaction(transaction);
  };

  const handleSaveEdit = () => {
    const updatedTransactions = transactions.map((t) =>
      t.id === editingTransaction.id
        ? { ...editingTransaction, id: generateId(editingTransaction.name) }
        : t
    );
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
    const currentDate = new Date().toISOString().split("T")[0];

    setTransactions([
      ...transactions,
      {
        id: newId,
        ...newTransaction,
        dateCreated: currentDate,
      },
    ]);

    setIsAdding(false);
    setNewTransaction({ name: "", dateCreated: "", priorityList: "Not Priority" });
  };

  const handleCancel = () => {
    setNewTransaction({ name: "", dateCreated: "", priorityList: "Not Priority" });
    setEditingTransaction(null);
  };

  const handleCloseModal = () => {
    setIsAdding(false);
    setIsEditing(false);
  };

  const handleClearFields = () => {
    if (isAdding) {
      setNewTransaction({ name: "", dateCreated: "", priorityList: "Not Priority" });
    } else if (isEditing && editingTransaction) {
      setEditingTransaction({ ...editingTransaction, name: "" });
    }
  };

  return (
    <div className="container">
      <button className="add-button" onClick={handleAdd}>
        <FaClipboardList />
      </button>

      <div className="transaction-container">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-card">
            <h3 className="card-title">Transactions</h3>
            <div className="toggle">
              <input type="checkbox" id={`toggle-${transaction.id}`} />
              <label htmlFor={`toggle-${transaction.id}`} className="toggle-label"></label>
            </div>
            <p><strong>ID:</strong> {transaction.id}</p>
            <p><strong>Name:</strong> {transaction.name}</p>
            <p><strong>Date Created:</strong> {transaction.dateCreated}</p>
            <p><strong>Priority List:</strong> {transaction.priorityList}</p>
            <button className="edit-button" onClick={() => handleEdit(transaction)}>
              <FaEdit /> Edit
            </button>
          </div>
        ))}
      </div>

      {(isAdding || isEditing) && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{isAdding ? "Add Transaction" : "Edit Transaction"}</h2>
              <button className="close-button" onClick={handleCloseModal}><FaTimes /></button>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Transaction Name"
              value={isAdding ? newTransaction.name : editingTransaction?.name}
              onChange={handleInputChange}
              className="input"
            />
            <p><strong>Date Created:</strong> {new Date().toISOString().split("T")[0]}</p>
            <div className="priority">
              <label className="priority-label"></label>
              <input
                type="radio"
                id="priority"
                name="priority"
                value="Priority"
                checked={(isAdding ? newTransaction.priorityList : editingTransaction?.priorityList) === "Priority"}
                onChange={() => handlePriorityChange("Priority")}
                className="priority-radio"
              />
              <label htmlFor="priority">Priority</label>
              <input
                type="radio"
                id="notPriority"
                name="priority"
                value="Not Priority"
                checked={(isAdding ? newTransaction.priorityList : editingTransaction?.priorityList) === "Not Priority"}
                onChange={() => handlePriorityChange("Not Priority")}
                className="priority-radio"
              />
              <label htmlFor="notPriority">Not Priority</label>
            </div>
            <div className="modal-buttons">
              <button
                className="save-button"
                onClick={isAdding ? handleAddTransaction : handleSaveEdit}
              >
                {isAdding ? "Add" : "Save"}
              </button>
              <button
                className="clear-button"
                onClick={handleClearFields}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transaction;
