import { configureStore } from '@reduxjs/toolkit';

import navMenu from './slices/navMenu';
import user from './slices/user';

const store = configureStore({
  reducer: {
    user: user.reducer,
    navMenu: navMenu.reducer
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
