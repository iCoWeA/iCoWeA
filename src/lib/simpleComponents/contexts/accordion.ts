import { createContext } from 'react';

export interface AccordionContext {
  isOpen: boolean;
  isDisabled: boolean;
  unmountOnExit: boolean;
  onToggle: () => void;
}

export const initialState: AccordionContext = {
  isOpen: false,
  isDisabled: false,
  unmountOnExit: false,
  onToggle: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
