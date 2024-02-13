import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

type State = User | null;

type Reducers = {
  setUser: (_: State, action: PayloadAction<User>) => User
};

const user = createSlice<State, Reducers>({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (_, action) => action.payload
  }
});

export const selectUser = ({ user }: StoreState): State => user;

export const userActions = user.actions;

export default user;
