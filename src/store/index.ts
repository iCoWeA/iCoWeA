import { configureStore } from '@reduxjs/toolkit';

import breakpoint from './slices/breakpoint';
import navbar from './slices/navbar';
import user from './slices/user';

const store = configureStore({
  reducer: {
    breakpoint: breakpoint.reducer,
    user: user.reducer,
    navbar: navbar.reducer
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
