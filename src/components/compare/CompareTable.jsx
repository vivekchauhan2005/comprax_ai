import React from 'react';
import { Check } from 'lucide-react';
import WinnerBadge from './WinnerBadge';

/**
 * CompareTable displaying a detailed, highlighted spec matrix and computing the final score
 */
export const CompareTable = ({ productA, productB }) => {
  if (!productA || !productB) return null;

  // Compare individual properties to determine which is better
  const getBetterSpec = (key, type) => {
    const valA = productA[key];
    const valB = productB[key];

    if (type === 'lower') {
      if (valA < valB) return 'A';
      if (valB < valA) return 'B';
    } else if (type === 'higher') {
      if (valA > valB) return 'A';
      if (valB > valA) return 'B';
    }
    return null; // Tie
  };

  const betterSpecs = {
    price: getBetterSpec('price', 'lower'),
    ram: getBetterSpec('ram', 'higher'),
    storage: getBetterSpec('storage', 'higher'),
    battery: getBetterSpec('battery', 'higher'),
    rating: getBetterSpec('rating', 'higher'),
  };

  // Compute final win totals
  let scoreA = 0;
  let scoreB = 0;

  Object.values(betterSpecs).forEach((winner) => {
    if (winner === 'A') scoreA++;
    if (winner === 'B') scoreB++;
  });

  const winnerProduct = scoreA > scoreB ? productA : scoreB > scoreA ? productB : null;
  const isTie = scoreA === scoreB;

  const rows = [
    { label: 'Brand', key: 'brand' },
    { label: 'Price Value', key: 'price', format: (v) => `$${v}`, better: betterSpecs.price },
    { label: 'Processor (CPU)', key: 'processor' },
    { label: 'RAM Memory', key: 'ram', format: (v) => `${v} GB`, better: betterSpecs.ram },
    { label: 'Storage Capacity', key: 'storage', format: (v) => `${v} GB`, better: betterSpecs.storage },
    { label: 'Battery Capacity', key: 'battery', format: (v) => `${v} mAh`, better: betterSpecs.battery },
    { label: 'Camera Setup', key: 'camera' },
    { label: 'Display Panel', key: 'display' },
    { label: 'Product Rating', key: 'rating', format: (v) => `${v} / 5.0`, better: betterSpecs.rating },
  ];

  return (
    <div className="space-y-6">
      {/* Dynamic Winner Badge Banner */}
      <WinnerBadge
        winner={winnerProduct}
        scoreA={scoreA}
        scoreB={scoreB}
        isTie={isTie}
      />

      {/* Comparison Grid Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-850/80 rounded-2xl shadow-sm overflow-hidden animate-in fade-in duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse table-fixed min-w-[550px]">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-850 bg-slate-50/50 dark:bg-slate-900/50 select-none">
                <th className="w-1/3 p-4 text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Specification Matrix
                </th>
                
                {/* Product A Slot Column */}
                <th className="w-1/3 p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800">
                      <img src={productA.image} alt={productA.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-950 dark:text-white line-clamp-1 font-display">
                      {productA.name}
                    </h3>
                  </div>
                </th>

                {/* Product B Slot Column */}
                <th className="w-1/3 p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800">
                      <img src={productB.image} alt={productB.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-950 dark:text-white line-clamp-1 font-display">
                      {productB.name}
                    </h3>
                  </div>
                </th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-slate-100 dark:divide-slate-850">
              {rows.map((row) => {
                const valA = row.format ? row.format(productA[row.key]) : productA[row.key];
                const valB = row.format ? row.format(productB[row.key]) : productB[row.key];

                const isWinA = row.better === 'A';
                const isWinB = row.better === 'B';

                return (
                  <tr key={row.label} className="hover:bg-slate-50/20 dark:hover:bg-slate-855/10 transition-colors">
                    {/* Feature Label */}
                    <td className="p-4 text-xs font-semibold text-slate-450 dark:text-slate-500 uppercase tracking-wide select-none">
                      {row.label}
                    </td>
                    
                    {/* Product A Spec Value */}
                    <td className={`p-4 text-xs sm:text-sm font-semibold ${
                      isWinA 
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/15 dark:bg-emerald-950/10' 
                        : 'text-slate-750 dark:text-slate-300'
                    }`}>
                      <div className="flex items-center justify-between gap-2.5">
                        <span className="truncate">{valA}</span>
                        {isWinA && <Check className="h-4 w-4 text-emerald-650 dark:text-emerald-450 flex-shrink-0" />}
                      </div>
                    </td>

                    {/* Product B Spec Value */}
                    <td className={`p-4 text-xs sm:text-sm font-semibold ${
                      isWinB 
                        ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/15 dark:bg-emerald-950/10' 
                        : 'text-slate-750 dark:text-slate-300'
                    }`}>
                      <div className="flex items-center justify-between gap-2.5">
                        <span className="truncate">{valB}</span>
                        {isWinB && <Check className="h-4 w-4 text-emerald-650 dark:text-emerald-450 flex-shrink-0" />}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompareTable;
