import { createContext } from 'react';

export interface AccordionContext {
  onToggle: () => void;
  size: Sizes;
  open: boolean;
  id?: string;
  disabled: boolean;
}

export const initialState: AccordionContext = {
  onToggle: () => {},
  size: 'md',
  open: false,
  disabled: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
