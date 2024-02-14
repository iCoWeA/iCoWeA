import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const initialState: User = {
  firstname: '',
  lastname: '',
  image: '',
  email: '',
  phone: '',
  dob: '',
  about: '',
  street: '',
  streetNumber: '',
  postalCode: '',
  city: '',
  country: '',
  github: '',
  linkedin: '',
  instagram: '',
  facebook: ''
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, action) => action.payload
  }
});

export const selectUser = ({ user }: StoreState): User => user;

export const userActions = user.actions;

export default user;
