import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types';
import TaskForm from './TaskForm';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleComplete, deleteTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);

  const priorityColors = {
    Low: 'bg-green-200',
    Medium: 'bg-yellow-200',
    High: 'bg-red-200'
  };

  if (isEditing) {
    return (
      <div className="border p-4 mb-4 rounded">
        <TaskForm task={task} onClose={() => setIsEditing(false)} />
      </div>
    );
  }

  return (
    <div className={`border p-4 mb-4 rounded ${task.completed ? 'bg-gray-100' : ''}`}>
      <h3 className={`text-xl font-bold ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
      <p className="mt-2">{task.description}</p>
      <div className="mt-2 flex items-center space-x-2">
        <span className="text-sm text-gray-500">Category: {task.category}</span>
        <span className={`text-sm px-2 py-1 rounded ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <div className="mt-4 space-x-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 bg-yellow-500 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

