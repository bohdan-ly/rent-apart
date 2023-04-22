import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api } from 'app/model/api';

export const fetchRealties = createAsyncThunk('realties/fetchRealties', async ({}) => {
  const { realties } = await Api.Realty.getRealties();
  return realties;
});

const initialState = {
  realties: [],
  status: 'loading', // loading | success | error
};

export const realtySlice = createSlice({
  name: 'realties',
  initialState,
  reducers: {
    setRealties: (state, action) => {
      state.realties = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRealties.pending, (state) => {
      state.realties = [{}, {}, {}, {}, {}, {}];
      state.status = 'loading';
    });
    builder.addCase(fetchRealties.fulfilled, (state, action) => {
      state.realties = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchRealties.rejected, (state) => {
      state.realties = [];
      state.status = 'error';
    });
  },
});

// Action creators are generated for each case reducer function
export const { setRealties } = realtySlice.actions;

export default realtySlice.reducer;
