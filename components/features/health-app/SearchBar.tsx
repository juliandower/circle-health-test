import React from 'react';


export const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="How can we help?"
        className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
