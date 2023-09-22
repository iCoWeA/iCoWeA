export {};

declare global {
  export type Themes = 'light' | 'dark' | string;
  export type Sizes = 'xs' | 'sm' | 'md' | 'lg';
  export type Colors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;
  export type Shapes = 'rounded' | 'circular' | 'square';
  export type Orientations = 'horizontal' | 'vertical';
  export type InnerPositions = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  export type OuterPositions = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  export type Underlines = 'none' | 'hover' | 'always';
  export type DecoratorPosition = 'start' | 'end';
  export type CornerPositions = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  export type Directions = 'top' | 'left' | 'right' | 'bottom';

  export type InputVariants = 'outlined' | 'filled' | 'standard';
  export type ButtonSizes = 'sm' | 'md' | 'lg';
};
