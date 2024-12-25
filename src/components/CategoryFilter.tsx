import React from 'react';
import { useTaskContext } from '../context/TaskContext';

interface CategoryFilterProps {
  setCategoryFilter: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ setCategoryFilter }) => {
  const { tasks } = useTaskContext();
  const categories = ['All', ...new Set(tasks.map(task => task.category))];

  return (
    <select
      onChange={(e) => setCategoryFilter(e.target.value)}
      className="p-2 border rounded"
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;

