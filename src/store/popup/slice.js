import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  content: null,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    closePopup: (state) => {
      state.isVisible = false;
      state.content = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
