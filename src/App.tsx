import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import PrioritySort from './components/PrioritySort';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [prioritySort, setPrioritySort] = useState<'asc' | 'desc' | null>(null);

  return (
    <TaskProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">To-Do App</h1>
        <div className="mb-4">
          <TaskForm />
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <SearchBar setSearchTerm={setSearchTerm} />
          <CategoryFilter setCategoryFilter={setCategoryFilter} />
          <PrioritySort setPrioritySort={setPrioritySort} />
        </div>
        <TaskList 
          searchTerm={searchTerm} 
          categoryFilter={categoryFilter} 
          prioritySort={prioritySort}
        />
      </div>
    </TaskProvider>
  );
};

export default App;

