import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from 'app/model/api';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const { user } = await Api.Auth.getUser();
  return user;
});

const initialState = {
  user: JSON.parse(window.localStorage.getItem('user') || 'null'),
  status: 'loading', // loading | success | error
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.user = null;
      state.status = 'loading';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.user = null;
      state.status = 'error';
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
