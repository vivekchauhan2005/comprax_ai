import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { RotateCcw } from 'lucide-react';

/**
 * FilterPanel component rendered inside Products page sidebar
 */
export const FilterPanel = () => {
  const {
    brands,
    categories,
    selectedBrands,
    toggleBrand,
    selectedCategories,
    toggleCategory,
    resetFilters,
    filteredProducts
  } = useProducts();

  const totalActive = selectedBrands.length + selectedCategories.length;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Filters</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{filteredProducts.length} items found</p>
        </div>
        {totalActive > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Reset ({totalActive})
          </button>
        )}
      </div>

      {/* Brand Section */}
      <div className="space-y-3">
        <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-550 uppercase tracking-wider">Brands</h4>
        <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
          {brands.map((brand) => {
            const isChecked = selectedBrands.includes(brand);
            return (
              <label 
                key={brand} 
                className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-350 cursor-pointer select-none hover:text-slate-900 dark:hover:text-slate-105 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleBrand(brand)}
                  className="rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500/20 h-4 w-4 bg-transparent transition-all cursor-pointer"
                />
                <span className={isChecked ? "font-medium text-slate-950 dark:text-slate-50" : ""}>
                  {brand}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Category Section */}
      <div className="space-y-3">
        <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-550 uppercase tracking-wider">Categories</h4>
        <div className="space-y-2.5 pr-1">
          {categories.map((category) => {
            const isChecked = selectedCategories.includes(category);
            return (
              <label 
                key={category} 
                className="flex items-center gap-2.5 text-sm text-slate-650 dark:text-slate-350 cursor-pointer select-none hover:text-slate-900 dark:hover:text-slate-105 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCategory(category)}
                  className="rounded border-slate-300 dark:border-slate-700 text-indigo-600 focus:ring-indigo-500/20 h-4 w-4 bg-transparent transition-all cursor-pointer"
                />
                <span className={isChecked ? "font-medium text-slate-950 dark:text-slate-50" : ""}>
                  {category}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
