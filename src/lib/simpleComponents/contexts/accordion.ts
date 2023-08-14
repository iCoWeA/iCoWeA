import { createContext } from 'react';
import { States as TransitionStates } from '../hooks/useTransition';

export interface AccordionContext {
  state: TransitionStates,
  duration: number,
  enterTransition: string;
  isDisabled: boolean;
  onClick: () => void;
  onTransitionEnd: () => void;
}

export const initialState: AccordionContext = {
  state: TransitionStates.EXITED,
  duration: 250,
  enterTransition: '',
  isDisabled: false,
  onClick: () => {},
  onTransitionEnd: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
