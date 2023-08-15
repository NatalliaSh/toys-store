import { createSlice } from '@reduxjs/toolkit';
import { getSynchronizedWithLSBasketData } from '../functions/localStorage';

const initialState = {
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  mochID: null,
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
    },

    setBasket: (state, action) => {
      state.data = action.payload;
    },

    deleteDataElement: (state, action) => {
      delete state.data[action.payload]; //payload = idValue
    },

    setMochID(state, action) {
      state.mochID = action.payload;
    },
  },
});

export const {
  updateLoadState,
  updateData,
  deleteDataElement,
  setBasket,
  setMochID,
} = basketSlice.actions;

export default basketSlice.reducer;
