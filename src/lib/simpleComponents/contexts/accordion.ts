import { createContext } from 'react';
import { type AccordionVariants } from '../components/UI/Accordion';

export interface AccordionContext {
  onToggle: () => void;
  variant: AccordionVariants;
  color: Colors;
  open: boolean;
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
