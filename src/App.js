import React, { useState , useEffect} from 'react';
import './App.css';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';

function App() {
  // STATE: Array to store all tasks
  const [tasks, setTasks] = useState([
  ]);
  const savetaskdata=() =>{
    localStorage.setItem("Task",JSON.stringify(tasks));
    console.log("task is added to local storage");
  }

  // FUNCTION 1: Add a new task
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      isEditing: false
    };
    setTasks([...tasks, newTask]);
    console.log("Task added:", newTask);
  };

  // FUNCTION 2: Delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    console.log("Task deleted with ID:", taskId);
  };

  // FUNCTION 3: Edit a task
  const editTask = (taskId, newText) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, text: newText, isEditing: false };
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log("Task edited with ID:", taskId);
  };

  // FUNCTION 4: Toggle edit mode
  const toggleEdit = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isEditing: !task.isEditing };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <div className="app-header">
        <div className="header-title">
          <h1>To Do List</h1>
        </div>
      </div>
      
      {/* TaskInput Component */}
      <TaskInput onAddTask={addTask} tasks={tasks} />
      
      {/* TaskList - Shows all tasks */}
      <TaskList 
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onToggleEdit={toggleEdit}
      />
    </div>
  );
}

export default App;
