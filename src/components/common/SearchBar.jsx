import React from 'react';
import { Search, X } from 'lucide-react';
import { useProducts } from '../../context/ProductContext';

/**
 * SearchBar component that connects directly to ProductContext
 */
export const SearchBar = ({ placeholder = "Search smartphones, brands, specs..." }) => {
  const { searchQuery, setSearchQuery } = useProducts();

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 dark:text-slate-500">
        <Search className="h-4 w-4" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-950 dark:text-slate-550 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-550/10 focus:border-indigo-550 dark:focus:border-indigo-500/80 transition-all shadow-sm"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-250 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
