import { createSlice } from '@reduxjs/toolkit';
import { type StoreState } from '..';

const initialState = false;

const navMenu = createSlice({
  name: 'navMenu',
  initialState,
  reducers: {
    show () { return true; },
    hide () { return false; },
    toggle (prevState) { return !prevState; }
  }
});

export default navMenu;

export const selectNavMenuState = ({ navMenu }: StoreState): boolean => navMenu;
