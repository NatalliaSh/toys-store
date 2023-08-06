import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  data: {},
  /*data: {
    { productID:{data:{}, amount:1 },
    { productID:{data:{}, amount:1 }
  }     
  ,*/
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    updateLoadState: (state, action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state, action) => {
      state.data[action.payload.productID] = action.payload.data;
    },

    updateProductData: (state, action) => {
      state.data[action.payload.productID].data = action.payload.data;
    },
  },
});

export const { updateLoadState, updateData, updateProductData } =
  basketSlice.actions;

export default basketSlice.reducer;
