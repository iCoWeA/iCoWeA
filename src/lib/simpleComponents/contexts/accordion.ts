import { createContext } from 'react';

export interface AccordionContext {
  isOpen: boolean;
  transitionDuration: number;
  isDisabled: boolean;
  onClick: () => void;
}

export const initialState: AccordionContext = {
  isOpen: false,
  transitionDuration: 500,
  isDisabled: false,
  onClick: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
