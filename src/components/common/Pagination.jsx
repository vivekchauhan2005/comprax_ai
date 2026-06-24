import React from 'react';
import { useProducts } from '../../context/ProductContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Pagination component integrated with ProductContext
 */
export const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useProducts();

  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-10 select-none">
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        onClick={handlePrev}
        className="px-2 py-2"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`h-9 w-9 text-xs font-semibold rounded-lg border transition-all duration-200 ${
            currentPage === page
              ? 'bg-indigo-650 text-white border-indigo-650 shadow-sm shadow-indigo-500/10'
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-850'
          }`}
        >
          {page}
        </button>
      ))}

      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={handleNext}
        className="px-2 py-2"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
