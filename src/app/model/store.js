import { configureStore } from '@reduxjs/toolkit';
import auth from 'store/auth/auth.slice.js';

// import categories from 'store/categories/slice';

export const store = configureStore({
  reducer: { auth },
});
