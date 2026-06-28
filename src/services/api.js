import axios from 'axios';
import productsData from '../data/products.json';
 
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.comparex.ai/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

 

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: productsData,
        status: 200,
        statusText: 'OK',
      });
    }, 300);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productsData.find((p) => p.id === id);
      if (product) {
        resolve({
          data: product,
          status: 200,
          statusText: 'OK',
        });
      } else {
        reject({
          response: {
            status: 404,
            statusText: 'Not Found',
            data: { message: `Product with ID ${id} not found.` },
          },
        });
      }
    }, 300);
  });
};

export default api;
