import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { ArrowUpDown } from 'lucide-react';

/**
 * SortDropdown component for organizing products
 */
export const SortDropdown = () => {
  const { sortBy, setSortBy } = useProducts();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1 select-none">
        <ArrowUpDown className="h-3.5 w-3.5" /> Sort
      </span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-2 pl-2.5 pr-8 text-slate-700 dark:text-slate-350 focus:outline-none focus:ring-2 focus:ring-indigo-550/10 focus:border-indigo-550 dark:focus:border-indigo-500/80 shadow-sm cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:8px_8px] bg-[right_10px_center] bg-no-repeat font-medium transition-all"
      >
        <option value="default">Default Match</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Highest Rated</option>
      </select>
    </div>
  );
};

export default SortDropdown;
