import { configureStore } from '@reduxjs/toolkit';
import navMenu from './Slices/navMenu';

const store = configureStore({
  reducer: {
    navMenu: navMenu.reducer
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
