import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types';

interface TaskFormProps {
  task?: Task;
  onClose?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onClose }) => {
  const { addTask, editTask } = useTaskContext();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [category, setCategory] = useState(task?.category || '');
  const [priority, setPriority] = useState<Task['priority']>(task?.priority || 'Medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      editTask({ ...task, title, description, category, priority });
    } else {
      addTask({ title, description, category, priority, completed: false });
    }
    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('Medium');
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="w-full p-2 border rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Task['priority'])}
        className="w-full p-2 border rounded"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        {task ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;

