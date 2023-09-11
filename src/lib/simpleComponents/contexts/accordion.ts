import { type ReactNode, createContext } from 'react';
import { type AccordionVariants } from '../configs/accordionConfig';

export interface AccordionContext {
  onToggle: () => void;
  variant: AccordionVariants;
  size: Sizes;
  color: Colors;
  open: boolean;
  icon?: ReactNode;
  id?: string;
  disabled: boolean;
}

export const initialState: AccordionContext = {
  onToggle: () => {},
  variant: 'text',
  size: 'md',
  color: 'defualt',
  open: false,
  disabled: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
