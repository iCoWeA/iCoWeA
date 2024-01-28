import { configureStore } from '@reduxjs/toolkit';

import navbar from './slices/navbar';
import user from './slices/user';

const store = configureStore({
  reducer: {
    user: user.reducer,
    navbar: navbar.reducer
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
