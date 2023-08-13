import { createContext } from 'react';

export interface AccordionContext {
  isMounted: boolean;
  isOpen: boolean;
  isDisabled: boolean;
  unmountOnExit: boolean;
  onToggle: () => void;
  unmount: () => void;
}

export const initialState: AccordionContext = {
  isMounted: false,
  isOpen: false,
  isDisabled: false,
  unmountOnExit: false,
  onToggle: () => {},
  unmount: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
