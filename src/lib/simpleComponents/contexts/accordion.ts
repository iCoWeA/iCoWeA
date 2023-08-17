import { createContext } from 'react';

export interface AccordionContext {
  open: boolean;
  duration: number;
  disabled: boolean;
  onClick: () => void;
}

export const initialState: AccordionContext = {
  open: false,
  duration: 500,
  disabled: false,
  onClick: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
