import React from 'react';
import { useProducts } from '../../context/ProductContext';

/**
 * CategoryChips component rendering quick-clickable category tags
 */
export const CategoryChips = () => {
  const { categories, selectedCategories, toggleCategory, setSelectedCategories } = useProducts();

  const handleAllClick = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center overflow-x-auto pb-1 select-none scrollbar-none">
      <button
        onClick={handleAllClick}
        className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 whitespace-nowrap ${
          selectedCategories.length === 0
            ? 'bg-indigo-650 text-white border-indigo-650 shadow-sm shadow-indigo-500/10'
            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850'
        }`}
      >
        All Phones
      </button>
      {categories.map((category) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 whitespace-nowrap ${
              isSelected
                ? 'bg-indigo-650 text-white border-indigo-650 shadow-sm shadow-indigo-500/10'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryChips;
