import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataLoadState: 0, // 0 - not loaded, 1 - is loading, 2 - loaded, 3 - error
  dataLoadError: null,
  workMode: 0, //0-infiniteLoading, 1-pagination
  data: [],
  page: null,
  pagesAmount: null,
  nextPageURL: null,
  prevPageURL: null,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    updateLoadState: (state, action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state, action) => {
      state.data =
        state.workMode === 0
          ? state.data.concat(action.payload)
          : action.payload;
    },

    resetData: (state, action) => {
      state.data = action.payload;
    },

    setWorkMode: (state, action) => {
      state.workMode = action.payload;
    },

    setPagesInfo: (state, action) => {
      state.page = action.payload.page;
      state.pagesAmount = action.payload.pagesAmount;
      state.nextPageURL = action.payload.nextPageURL;
      state.prevPageURL = action.payload.prevPageURL;
    },
  },
});

export const {
  updateLoadState,
  updateData,
  setWorkMode,
  setPagesInfo,
  resetData,
} = charactersSlice.actions;

export default charactersSlice.reducer;
