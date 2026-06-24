import React from 'react';
import { useCompare } from '../../context/CompareContext';
import { useProducts } from '../../context/ProductContext';
import { X } from 'lucide-react';

/**
 * CompareSelector dropdown setups for configuring the comparison board
 */
export const CompareSelector = () => {
  const { compareList, addToCompare, removeFromCompare, clearCompare } = useCompare();
  const { products } = useProducts();

  const handleSelect = (index, productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    
    // If slot is occupied, remove it first
    if (compareList[index]) {
      removeFromCompare(compareList[index].id);
    }
    addToCompare(product);
  };

  const getAvailableProducts = (currentId) => {
    return products.filter(
      (p) => !compareList.some((c) => c.id === p.id) || p.id === currentId
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl p-6 shadow-sm mb-6 animate-in fade-in duration-300 select-none">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-850 mb-6">
        <div>
          <h2 className="text-base font-bold text-slate-950 dark:text-white font-display">
            Comparison Board Setup
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            Configure any two smartphones for analytical comparison
          </p>
        </div>
        {compareList.length > 0 && (
          <button
            onClick={clearCompare}
            className="text-xs font-semibold text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-450 transition-colors"
          >
            Clear Configuration
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Visual vertical divider on desktop */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-100 dark:bg-slate-855" />

        {/* Slot Columns */}
        {[0, 1].map((index) => {
          const product = compareList[index];
          const available = getAvailableProducts(product?.id);

          return (
            <div key={index} className="flex flex-col gap-3">
              <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-550">
                Slot {index + 1}
              </label>

              {product ? (
                /* Selected slot preview card */
                <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-150 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-950/20 relative animate-in fade-in duration-200">
                  <div className="h-16 w-16 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-indigo-650 dark:text-indigo-400">
                      {product.brand}
                    </span>
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 truncate mt-0.5">
                      {product.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">
                      ${product.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCompare(product.id)}
                    className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-450 bg-white dark:bg-slate-900 shadow-sm transition-colors cursor-pointer"
                    title="Remove from slot"
                  >
                    <X className="h-4.5 w-4.5" />
                  </button>
                </div>
              ) : (
                /* Unselected slot selector */
                <div className="relative">
                  <select
                    onChange={(e) => handleSelect(index, e.target.value)}
                    value=""
                    className="w-full text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 px-4 text-slate-500 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-550/10 focus:border-indigo-550 dark:focus:border-indigo-500/80 shadow-sm cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:9px_9px] bg-[right_16px_center] bg-no-repeat transition-all"
                  >
                    <option value="" disabled>-- Select a smartphone --</option>
                    {available.map((p) => (
                      <option key={p.id} value={p.id}>
                        [{p.brand}] {p.name} - ${p.price}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompareSelector;
