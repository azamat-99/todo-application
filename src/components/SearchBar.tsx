import React from 'react';

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border rounded"
    />
  );
};

export default SearchBar;

