import { type ReactNode, createContext } from 'react';

export interface AccordionContext {
  onToggle: () => void;
  open: boolean;
  icon?: ReactNode;
  id?: string;
  disabled: boolean;
}

export const initialState: AccordionContext = {
  onToggle: () => {},
  open: false,
  disabled: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
