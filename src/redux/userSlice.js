import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  userName: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.userName = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
