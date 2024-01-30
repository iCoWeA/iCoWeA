import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const navbar = createSlice({
  name: 'navbar',
  initialState: false,
  reducers: {
    open: () => true,
    close: () => false,
    toggle: (prevState) => !prevState
  }
});

export const selectNavbar = ({ navbar }: StoreState): boolean => navbar;

export const navbarActions = navbar.actions;

export default navbar;
