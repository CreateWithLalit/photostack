import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <div className="flex justify-center my-8 px-4">
      <div className="relative w-full max-w-md group">
        <input
          type="text"
          placeholder="Search photos by author..."
          value={searchQuery}
          onChange={onSearch}
          className="w-full pl-12 pr-4 py-3 bg-[#141414] border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all text-[#F9FAFB] placeholder-[#6B7280] shadow-xl"
        />
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] group-focus-within:text-[#7C3AED] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
