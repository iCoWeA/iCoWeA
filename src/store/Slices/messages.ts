import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

export type Messages = Record<string, Message>;

const initialState: Messages = {};

const reducers = {
  setMessage: (_: Messages, action: PayloadAction<Messages>) => action.payload
};

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers
});

export const selectMessages = ({ messages }: StoreState): Messages => messages;

export const messagesActions = messages.actions;

export default messages;
