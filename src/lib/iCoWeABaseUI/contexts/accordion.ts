import { createContext } from 'react';

type AccordionContext = {
  onToggle?: VoidFunction;
  open: boolean;
  variant: Variants;
  color: Colors;
  size: Sizes;
  divider: boolean;
  noRipple: boolean,
  openVariant?: Variants;
  openColor?: Colors;
  leftExpandIcon?: boolean;
  rightExpandIcon?: boolean;
  indexId?: string;
  disabled?: boolean;
};

export const initialState: AccordionContext = {
  open: false,
  variant: 'default',
  color: 'neutral',
  size: 'md',
  divider: false,
  noRipple: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
