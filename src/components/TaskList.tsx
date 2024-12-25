import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  searchTerm: string;
  categoryFilter: string;
  prioritySort: 'asc' | 'desc' | null;
}

const TaskList: React.FC<TaskListProps> = ({ searchTerm, categoryFilter, prioritySort }) => {
  const { tasks } = useTaskContext();
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  const filteredTasks = tasks
    .filter(task => 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(task => categoryFilter === 'All' || task.category === categoryFilter);

  const sortedTasks = prioritySort
    ? [...filteredTasks].sort((a, b) => {
        const priorityOrder = { Low: 1, Medium: 2, High: 3 };
        return prioritySort === 'asc'
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      })
    : filteredTasks;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = sortedTasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(sortedTasks.length / tasksPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

