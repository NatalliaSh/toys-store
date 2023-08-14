import { createSlice } from '@reduxjs/toolkit';
import { addToLSBasket, deleteFromLSBasket } from '../functions/localStorage';
import { getSynchronizedWithLSBasketData } from '../functions/localStorage';

const initialState = {
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  data: getSynchronizedWithLSBasketData() /*data: { idVavue: amount,
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
      addToLSBasket(action.payload.productID, action.payload.amount);
    },

    deleteDataElement: (state, action) => {
      delete state.data[action.payload]; //payload = idValue
      deleteFromLSBasket(action.payload);
    },
  },
});

export const { updateLoadState, updateData, deleteDataElement } =
  basketSlice.actions;

export default basketSlice.reducer;
