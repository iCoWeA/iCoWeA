import { createContext } from 'react';

export interface AccordionContext {
  isMounted: boolean;
  isOpen: boolean;
  transitionDuration: number;
  isDisabled: boolean;
  unmountOnExit: boolean;
  onToggle: () => void;
  unmount: () => void;
}

export const initialState: AccordionContext = {
  isMounted: false,
  isOpen: false,
  transitionDuration: 250,
  isDisabled: false,
  unmountOnExit: false,
  onToggle: () => {},
  unmount: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
