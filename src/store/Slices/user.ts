import { createSlice, type SliceCaseReducers, type PayloadAction } from '@reduxjs/toolkit';

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

type State = User | null | undefined;

const user = createSlice<State, SliceCaseReducers<State>>({
  name: 'user',
  initialState: null,
  reducers: {
    setError: (): null => null,
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
    }: PayloadAction<User>): User => ({
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

export const selectNavMenuState = ({ user }: StoreState): State => user;
