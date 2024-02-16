import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const reducers = {
  setWasLogged: (_: boolean, action: PayloadAction<boolean>) => action.payload
};

const wasLogged = createSlice({
  name: 'wasLogged',
  initialState: false,
  reducers
});

export const selectWasLogged = ({ wasLogged }: StoreState): boolean => wasLogged;

export const wasLoggedActions = wasLogged.actions;

export default wasLogged;
