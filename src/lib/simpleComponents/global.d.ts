export {};

declare global {
  export type Colors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;
  export type Sizes = 'sm' | 'md' | 'lg';
  export type Aligns = 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
  export type Positions = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
};
