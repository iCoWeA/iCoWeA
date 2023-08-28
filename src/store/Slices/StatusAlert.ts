import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type StoreState } from '..';
import { type AlertProps } from '../../lib/simpleComponents/components/UI/Alert';

interface State {
  open: boolean;
  props: AlertProps;
}

const initialState: State = { open: false, props: {} };

const statusAlert = createSlice({
  name: 'statusAlert',
  initialState,
  reducers: {
    show (_, action: PayloadAction<AlertProps>) { return { open: true, props: action.payload }; },
    hide (prevState) { return { open: false, props: prevState.props }; }
  }
});

export default statusAlert;

export const selectState = ({ statusAlert }: StoreState): State => statusAlert;
