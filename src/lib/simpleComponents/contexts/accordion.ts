import { createContext } from 'react';

export interface AccordionContext {
  onToggle: () => void;
  variant: ButtonVariants;
  color: Colors;
  open: boolean;
  id?: string;
  disabled: boolean;
}

export const initialState: AccordionContext = {
  onToggle: () => {},
  variant: 'text',
  color: 'default',
  open: false,
  disabled: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
