import { type CaseReducer, createSlice } from '@reduxjs/toolkit';
import { type StoreState } from '..';

const show: CaseReducer<boolean> = () => {
  return true;
};

const hide: CaseReducer<boolean> = () => {
  return false;
};

const toggle: CaseReducer<boolean> = (open) => {
  if (!open) {
    return true;
  }

  return false;
};

const initialState = false;

const navMenu = createSlice({
  name: 'navMenu',
  initialState,
  reducers: {
    show,
    hide,
    toggle
  }
});

export default navMenu;

export const selectState: (storeState: StoreState) => boolean = ({ navMenu }) => navMenu;
