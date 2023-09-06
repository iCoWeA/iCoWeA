import { createContext } from 'react';

export interface AccordionContext {
  open: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const initialState: AccordionContext = {
  open: false,
  disabled: false,
  onClick: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
