import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const navbar = createSlice({
  name: 'navbar',
  initialState: false,
  reducers: {
    show: () => true,
    hide: () => false,
    toggle: (prevState) => !prevState
  }
});

export default navbar;

export const useSelectNavbar = ({ navbar }: StoreState): boolean => navbar;

export const navbarActions = navbar.actions;
