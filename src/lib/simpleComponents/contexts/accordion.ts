import { type ReactNode, createContext } from 'react';

export interface AccordionContext {
  open: boolean;
  disabled: boolean;
  icon?: ReactNode;
  id?: string;
  onToggle: () => void;
}

export const initialState: AccordionContext = {
  open: false,
  disabled: false,
  onToggle: () => {}
};

const accordionContext = createContext(initialState);

export default accordionContext;
