import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', query);
    // Perform search functionality here
  };

  return (
    <div className="flex items-center w-full max-w-md mx-auto rounded-lg overflow-hidden ring-1 ring-transparent">
      <div className="p-2 bg-gray-100">
        <Search className="text-gray-500" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search"
        className="w-full p-2 text-gray-700  bg-gray-100 focus:outline-none"
      />
    
    </div>
  );
};

export default SearchBar;
