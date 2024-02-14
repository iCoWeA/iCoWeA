import { configureStore } from '@reduxjs/toolkit';

import breakpoint from './slices/breakpoint';
import messages from './slices/messages';
import navbar from './slices/navbar';
import projects from './slices/projects';
import user from './slices/user';

const store = configureStore({
  reducer: {
    breakpoint: breakpoint.reducer,
    navbar: navbar.reducer,
    user: user.reducer,
    projects: projects.reducer,
    messages: messages.reducer
  }
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export default store;
