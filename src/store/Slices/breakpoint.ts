import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const calculateBreakpoint = (width: number): Breakpoints => {
  return Breakpoints.SM;
};

const breakpoint = createSlice({
  name: 'breakpoint',
  initialState: calculateBreakpoint(document.documentElement.clientWidth),
  reducers: {
    set: () => calculateBreakpoint(document.documentElement.clientWidth)
  }
});

export const selectBreakpoint = ({ breakpoint }: StoreState): Breakpoints => breakpoint;

export const breakpointActions = breakpoint.actions;

export default breakpoint;
