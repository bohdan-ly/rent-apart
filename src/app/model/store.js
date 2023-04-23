import { configureStore } from '@reduxjs/toolkit';
import realty from 'store/realty/slice';
import popup from 'store/popup/slice';
import user from 'store/user/slice';

export const store = configureStore({
  reducer: {
    realty,
    popup,
    user,
  },
});
