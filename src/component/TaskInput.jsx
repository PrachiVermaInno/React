import React, { useState } from 'react';
import './TaskInput.css';

function TaskInput({ onAddTask, tasks }) {
  // Local state for the input field
  const [inputValue, setInputValue] = useState("");
  
  // Local state for showing dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onAddTask(inputValue);
      setInputValue("");
      setShowDropdown(false); // Hide dropdown after adding
    } else {
      alert("Please enter a task!");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  // Show dropdown when input is focused
  const handleFocus = () => {
    if (tasks.length > 0) {
      setShowDropdown(true);
    }
  };

  // Hide dropdown when clicking outside
  const handleBlur = () => {
    // Delay to allow click on dropdown items
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  const handleSelectTask = (taskText) => {
  setInputValue(taskText);
  setShowDropdown(false);
  };


  return (
    <div className="task-list-container" >
      <input
        type="text"
        className="task-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className="button" onClick={handleSubmit}>
        Add
      </button>
      
      {/* Dropdown showing all tasks */}
      {/*showDropdown && tasks.length > 0 && (
        <div className="task-dropdown">
          <div className="dropdown-header">
            Existing Tasks ({tasks.length})
          </div>
          {tasks.map(task => (
            <div 
                key={task.id} 
                className="dropdown-item"
                onClick={() => handleSelectTask(task.text)}
              >
                ▸ {task.text}
              </div>

          ))}
        </div>
      )*/}
    </div>
  );
}

export default TaskInput;
