import { createContext } from 'react';

export interface AccordionContext {
  onToggle: () => void;
  variant: ItemVariant;
  color: Colors;
  open: boolean;
  id?: string;
  disabled: boolean;
}

export const initialState: AccordionContext = {
  onToggle: () => {},
  variant: 'plain',
  color: 'default',
  open: false,
  disabled: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
