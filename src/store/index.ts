import { configureStore } from '@reduxjs/toolkit';
import navMenu from './Slices/navMenu';
import statusAlert from './Slices/statusAlert';

const store = configureStore({
  reducer: {
    navMenu: navMenu.reducer,
    statusAlert: statusAlert.reducer
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
