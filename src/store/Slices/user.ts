import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const initialState: User = {
  id: '',
  firstname: '',
  lastname: '',
  imageURL: '',
  email: '',
  phone: '',
  sex: 'man',
  dob: '',
  about: '',
  street: '',
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
