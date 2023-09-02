import { createContext } from 'react';

export interface AccordionContext {
  open: boolean;
  transitionDuration: number;
  disabled: boolean;
  onClick: () => void;
}

export const initialState: AccordionContext = {
  open: false,
  transitionDuration: 500,
  disabled: false,
  onClick: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
