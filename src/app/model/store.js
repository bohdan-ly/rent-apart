import { configureStore } from '@reduxjs/toolkit';

import realty from 'store/realty/slice';
import auth from 'store/auth/slice.js';

export const store = configureStore({
  reducer: {
    realty,
    auth,
  },
});
