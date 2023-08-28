import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ALERT_TIMER } from '../../data/constants';
import { type AlertProps } from '../../lib/simpleComponents/components/UI/Alert';
import { type StoreState } from '..';

interface State {
  open: boolean;
  closable: boolean;
  timer: number;
  props: AlertProps;
}

interface ShowAction {
  closable?: boolean;
  timer?: number;
  props?: AlertProps
}

const initialState: State = { open: false, closable: true, timer: ALERT_TIMER, props: {} };

const statusAlert = createSlice({
  name: 'statusAlert',
  initialState,
  reducers: {
    show (_, { payload: { closable = true, timer = ALERT_TIMER, props = {} } }: PayloadAction<ShowAction>) { return { open: true, closable, timer, props }; },
    hide (prevState) { return { open: false, closable: prevState.closable, timer: prevState.timer, props: prevState.props }; }
  }
});

export default statusAlert;

export const selectState = ({ statusAlert }: StoreState): State => statusAlert;
