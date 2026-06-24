import React, { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import SearchBar from '../../components/common/SearchBar';
import FilterPanel from '../../components/common/FilterPanel';
import SortDropdown from '../../components/common/SortDropdown';
import CategoryChips from '../../components/common/CategoryChips';
import Pagination from '../../components/common/Pagination';
import EmptyState from '../../components/common/EmptyState';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ProductGrid from '../../components/product/ProductGrid';
import ProductList from '../../components/product/ProductList';
import { Grid, List, Search } from 'lucide-react';

/**
 * Catalog page displaying list/grid of smartphones, filters, sorts and pagination.
 */
export const Products = () => {
  const {
    paginatedProducts,
    loading,
    error,
    resetFilters
  } = useProducts();

  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-rose-650 font-bold font-display">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-4 animate-in fade-in duration-300">
      
      {/* Page Title */}
      <div className="select-none">
        <h1 className="text-2xl font-bold text-slate-950 dark:text-white font-display">
          Smartphones Catalog
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-550 mt-0.5">
          Explore specifications, toggle comparisons, and save to wishlist
        </p>
      </div>

      {/* Top Filter and Actions Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 shadow-sm">
        <SearchBar />
        
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end select-none">
          <SortDropdown />
          
          {/* Layout switcher */}
          <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
              aria-label="Grid View"
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-900 text-slate-950 dark:text-white shadow-sm'
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
              aria-label="List View"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Split Columns Grid */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <FilterPanel />
        </div>

        {/* Content body */}
        <div className="flex-1 w-full space-y-6">
          <CategoryChips />

          {loading ? (
            <LoadingSpinner />
          ) : paginatedProducts.length === 0 ? (
            <EmptyState
              icon={Search}
              title="No Smartphones Found"
              description="No phones match your current filter settings. Try resetting them."
              actionText="Reset Filters"
              onAction={resetFilters}
            />
          ) : (
            <>
              {viewMode === 'grid' ? (
                <ProductGrid products={paginatedProducts} />
              ) : (
                <ProductList products={paginatedProducts} />
              )}
              
              <Pagination />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
