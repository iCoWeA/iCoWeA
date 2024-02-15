import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const initialState: User = {
  firstname: '',
  lastname: '',
  imageURL: '',
  email: '',
  phone: '',
  dob: '',
  about: '',
  street: '',
  streetNumber: '',
  postalCode: '',
  city: '',
  country: '',
  githubURL: '',
  linkedinURL: '',
  instagramURL: '',
  facebookURL: ''
};

const reducers = {
  setUser: (_: User, action: PayloadAction<User>) => action.payload
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers
});

export const selectUser = ({ user }: StoreState): User => user;

export const userActions = user.actions;

export default user;
