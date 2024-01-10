import { createContext } from 'react';

export type AccordionContext = {
  onToggle?: VoidFunction;
  open: boolean;
  variant: Variants;
  color: Colors;
  size: Sizes;
  divider: boolean;
  leftExpandIcon: boolean;
  rightExpandIcon: boolean;
  indexId?: string;
  disabled?: boolean;
};

export const initialState: AccordionContext = {
  open: false,
  variant: 'default',
  color: 'neutral',
  size: 'md',
  divider: false,
  leftExpandIcon: true,
  rightExpandIcon: true
};

const accordionContext = createContext(initialState);

export default accordionContext;
