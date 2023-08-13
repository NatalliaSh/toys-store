import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  data: {} /*data: { idVavue: amount,
                     idVavue2: amount2
                    } */,
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
      state.data[action.payload.productID] = action.payload.amount;
    },

    deleteDataElement: (state, action) => {
      delete state.data[action.payload]; //payload = idValue
    },
  },
});

export const { updateLoadState, updateData, deleteDataElement } =
  basketSlice.actions;

export default basketSlice.reducer;
