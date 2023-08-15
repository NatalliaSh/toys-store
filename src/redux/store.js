import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import basketReducer from './basketSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
    user: userReducer,
  },
});
