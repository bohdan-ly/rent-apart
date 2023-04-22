import { configureStore } from '@reduxjs/toolkit';
import realty from 'store/realty/slice';

export const store = configureStore({
  reducer: {
    realty,
  },
});
