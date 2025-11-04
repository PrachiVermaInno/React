import React, { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, onDelete, onEdit, onToggleEdit }) {
  // Local state for edit input
  const [editText, setEditText] = useState(task.text);

  // Handle saving edited task
  const handleSave = () => {
    if (editText.trim() !== "") {
      onEdit(task.id, editText);
    } else {
      alert("Task cannot be empty!");
    }
  };

  // Handle canceling edit
  const handleCancel = () => {
    setEditText(task.text); // Reset to original text
    onToggleEdit(task.id);  // Exit edit mode
  };

  return (
    <li className="task-item">
      {task.isEditing ? (
        // EDIT MODE
        <>
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSave();
              if (e.key === 'Escape') handleCancel();
            }}
            autoFocus
          />
          <div className="button-group">
            <button className="btn btn-save" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        // NORMAL MODE
        <>
          <span className="task-text">{task.text}</span>
          <div className="button-group">
            <button 
              className="btn btn-edit" 
              onClick={() => onToggleEdit(task.id)}
            >
              Edit
            </button>
            <button 
              className="btn btn-delete" 
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
