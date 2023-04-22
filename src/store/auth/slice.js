import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  user: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authenticated = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.authenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;