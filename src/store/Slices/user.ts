import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type StoreState } from '..';

type User = {
  id: string,
  firstname: string,
  lastname: string,
  imageURL: string,
  email: string,
  phone: string,
  sex: 'man' | 'woman',
  dob: string,
  about: string,
  street: string,
  postalCode: string,
  city: string,
  country: string,
  github?: string,
  linkedin?: string,
  instagram?: string,
  facebook?: string
};

type State = User | Record<string, string> | null;

type Reducers = {
  setError: () => Record<string, string>,
  setUser: (prevState: State, action: PayloadAction<User>) => User
};

const user = createSlice<State, Reducers>({
  name: 'user',
  initialState: null,
  reducers: {
    setError: () => ({}),
    setUser: (prevState, {
      payload: {
        id,
        firstname,
        lastname,
        imageURL,
        email,
        phone,
        sex,
        dob,
        about,
        street,
        postalCode,
        city,
        country,
        github,
        linkedin,
        instagram,
        facebook
      }
    }) => ({
      id,
      firstname,
      lastname,
      imageURL,
      email,
      phone,
      sex,
      dob,
      about,
      street,
      postalCode,
      city,
      country,
      github,
      linkedin,
      instagram,
      facebook
    })
  }
});

export default user;

export const selectUser = ({ user }: StoreState): State => user;

export const userActions = user.actions;
