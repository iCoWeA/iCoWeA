import { createSlice } from '@reduxjs/toolkit';

import { type StoreState } from '..';

const initialState: Project[] = [];

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (_, action) => action.payload
  }
});

export const selectMessages = ({ messages }: StoreState): Project[] => messages;

export const messagesActions = messages.actions;

export default messages;
