import { createContext } from 'react';

export interface AccordionContext {
  isOpen: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export const initialState: AccordionContext = {
  isOpen: false,
  isDisabled: false,
  onToggle: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
