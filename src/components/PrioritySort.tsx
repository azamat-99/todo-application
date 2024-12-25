import React from 'react';

interface PrioritySortProps {
  setPrioritySort: (sort: 'asc' | 'desc' | null) => void;
}

const PrioritySort: React.FC<PrioritySortProps> = ({ setPrioritySort }) => {
  return (
    <select
      onChange={(e) => setPrioritySort(e.target.value as 'asc' | 'desc' | null)}
      className="p-2 border rounded"
    >
      <option value="">Sort by Priority</option>
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  );
};

export default PrioritySort;

