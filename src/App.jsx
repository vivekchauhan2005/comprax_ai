import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProductProvider } from './context/ProductContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';
import AppRoutes from './AppRoutes';

 
export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProductProvider>
          <WishlistProvider>
            <CompareProvider>
              <AppRoutes />
            </CompareProvider>
          </WishlistProvider>
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
