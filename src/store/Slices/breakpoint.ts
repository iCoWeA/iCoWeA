import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

export enum Breakpoints {SM, MD, LG, XL, XXL};

const calculateBreakpoint = (width: number): Breakpoints => {
  if (width < 600) {
    return Breakpoints.SM;
  }

  if (width < 905) {
    return Breakpoints.MD;
  }

  if (width < 1240) {
    return Breakpoints.LG;
  }

  if (width < 1440) {
    return Breakpoints.XL;
  }

  return Breakpoints.XXL;
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
