import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useLocalStorage('comparex-compare', []);
  const [showLimitWarning, setShowLimitWarning] = useState(false);

  const addToCompare = (product) => {
    if (compareList.some((item) => item.id === product.id)) {
      return;
    }
    if (compareList.length >= 2) {
      setShowLimitWarning(true);
      setTimeout(() => setShowLimitWarning(false), 3000);
      return;
    }
    setCompareList((prev) => [...prev, product]);
  };

  const removeFromCompare = (productId) => {
    setCompareList((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleCompare = (product) => {
    if (isInCompare(product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const isInCompare = (productId) => {
    return compareList.some((item) => item.id === productId);
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        isInCompare,
        clearCompare,
        showLimitWarning,
        setShowLimitWarning,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
