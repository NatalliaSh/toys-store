import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workMode: 0, //0-allProducts, 1-pagination
  page: null,
  pagesAmount: {
    all: null,
    wooden: null,
    stuffed: null,
    puzzle: null,
    educational: null,
    interactive: null,
    for_boys: null,
    for_girls: null,
    bestseller: null,
  },
  limit: 15,
  // nextPage: null,
  // prevPage: null,
};

export const pagingSlice = createSlice({
  name: 'paging',
  initialState,
  reducers: {
    setWorkMode: (state, action) => {
      state.workMode = action.payload;
    },

    setPagesInfo: (state, action) => {
      state.page = action.payload.page;
      state.pagesAmount[action.payload.category] = action.payload.pagesAmount;
      //state.nextPageURL = action.payload.nextPageURL;
      //state.prevPageURL = action.payload.prevPageURL;
    },
  },
});

export const { setWorkMode, setPagesInfo } = pagingSlice.actions;

export default pagingSlice.reducer;
