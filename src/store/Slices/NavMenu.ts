import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const navMenu = createSlice({
  name: 'navMenu',
  initialState: false,
  reducers: {
    show: () => true,
    hide: () => false,
    toggle: (prevState) => !prevState
  }
});

export default navMenu;

export const selectNavMenuState = ({ navMenu }: StoreState): boolean => navMenu;
