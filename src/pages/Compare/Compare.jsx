import React from 'react';
import { useCompare } from '../../context/CompareContext';
import { useProducts } from '../../context/ProductContext';
import CompareSelector from '../../components/compare/CompareSelector';
import CompareTable from '../../components/compare/CompareTable';
import EmptyState from '../../components/common/EmptyState';
import { Scale, Sparkles } from 'lucide-react';

/**
 * Dedicated Compare page holding comparison selection and analysis table
 */
export const Compare = () => {
  const { compareList, addToCompare, clearCompare } = useCompare();
  const { products } = useProducts();

  const handlePresetCompare = (idA, idB) => {
    clearCompare();
    const prodA = products.find((p) => p.id === idA);
    const prodB = products.find((p) => p.id === idB);
    if (prodA) addToCompare(prodA);
    if (prodB) addToCompare(prodB);
  };

  const isReady = compareList.length === 2;

  return (
    <div className="space-y-6 py-4 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="select-none">
        <h1 className="text-2xl font-bold text-slate-950 dark:text-white font-display">
          Comparison Board
        </h1>
        <p className="text-xs text-slate-400 dark:text-slate-550 mt-0.5">
          Evaluate technical specifications and find the best hardware value match
        </p>
      </div>

      {/* Configuration Selectors */}
      <CompareSelector />

      {isReady ? (
        /* Comparative Specs Matrix */
        <CompareTable productA={compareList[0]} productB={compareList[1]} />
      ) : (
        /* Empty configuration details & shortcuts presets */
        <div className="space-y-8">
          <EmptyState
            icon={Scale}
            title="Configure Comparison Board"
            description="Select two smartphones from the dropdown menus above to analyze hardware specification scores side-by-side."
          />

          {/* Quick Shortcuts */}
          {products.length > 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl p-6 shadow-sm max-w-xl mx-auto space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-405 dark:text-slate-500 text-center select-none flex items-center justify-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-indigo-650 dark:text-indigo-400" /> 
                Quick Comparisons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 select-none">
                <button
                  onClick={() => handlePresetCompare('iphone-16-pro-max', 'galaxy-s24-ultra')}
                  className="p-3 text-xs font-semibold rounded-xl border border-slate-150 dark:border-slate-850 hover:border-indigo-650 dark:hover:border-indigo-500 hover:bg-indigo-50/5 dark:hover:bg-indigo-950/5 text-slate-700 dark:text-slate-300 transition-all text-center cursor-pointer active:scale-98"
                >
                  iPhone 16 Pro Max vs Galaxy S24 Ultra
                </button>
                <button
                  onClick={() => handlePresetCompare('pixel-9-pro-xl', 'iphone-16-pro-max')}
                  className="p-3 text-xs font-semibold rounded-xl border border-slate-150 dark:border-slate-850 hover:border-indigo-650 dark:hover:border-indigo-500 hover:bg-indigo-50/5 dark:hover:bg-indigo-950/5 text-slate-700 dark:text-slate-300 transition-all text-center cursor-pointer active:scale-98"
                >
                  Pixel 9 Pro XL vs iPhone 16 Pro Max
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Compare;
