import { createContext } from 'react';
import { type AccordionVariant } from '../components/UI/Accordion';

export interface AccordionContext {
  onToggle: () => void;
  variant: AccordionVariant;
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
