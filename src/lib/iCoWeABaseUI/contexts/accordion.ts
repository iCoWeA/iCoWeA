import { createContext } from 'react';

type AccordionContext = {
  onToggle?: VoidFunction;
  size: Sizes;
  variant: Variants;
  color: DefaultColors;
  divider: boolean;
  noRipple: boolean,
  open: boolean;
  openVariant?: Variants;
  openColor?: DefaultColors;
  leftExpandIcon?: boolean;
  rightExpandIcon?: boolean;
  indexId?: string;
  disabled?: boolean;
};

export const initialState: AccordionContext = {
  size: 'md',
  variant: 'default',
  color: 'neutral',
  divider: false,
  noRipple: false,
  open: false
};

const accordionContext = createContext(initialState);

export default accordionContext;
