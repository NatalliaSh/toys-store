import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import basketReducer from './basketSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
  },
});
