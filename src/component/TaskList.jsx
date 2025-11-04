import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onDelete, onEdit, onToggleEdit }) {
  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggleEdit={onToggleEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
