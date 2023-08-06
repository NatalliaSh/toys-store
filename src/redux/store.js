import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import pagingReducer from './pagingSlice';
import basketReducer from './basketSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    paging: pagingReducer,
    basket: basketReducer,
  },
});
