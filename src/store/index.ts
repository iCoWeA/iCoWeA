import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
