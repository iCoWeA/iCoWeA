export {};

declare global {
  export type Obj = Record<string, string>;
  export type Sizes = 'sm' | 'md' | 'lg';
  export type Wraps = 'nowrap' | 'wrap' | 'wrap-reverse';
  export type Themes = 'light';
  export type Colors = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  export type TextColors = 'inherit' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  export type AlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline';
  export type JustifyItems = 'stretch' | 'start' | 'end' | 'center';
  export type AlignItems = 'stretch' | 'start' | 'end' | 'center' | 'baseline';
  export type Aligns = 'left' | 'right' | 'center' | 'justify';
  export type Gaps = 'none' | 'base' | 'sm' | 'md' | 'lg';
  export type Spacing = 'none' | 'sm' | 'md' | 'lg';
  export type Borders = 'none' | 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right' | boolean;
  export type Underlines = 'none' | 'hover' | 'always';
  export type Transitions = 'fade' | 'grow-x' | 'grow-y' | 'grow' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
  export type Layouts = 'root' | 'default' | 'standard' | 'dashboard' | 'fullbleed';
  export type ContainerLayouts = 'default' | 'header' | 'footer' | 'body';
  export type Directions = 'row' | 'col' | 'row-reverse' | 'col-reverse';
  export type Flows = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
  export type Orientations = 'vertical' | 'horizontal';
  export type Closable = 'none' | 'left' | 'right';
  export type Positions = 'top' | 'left' | 'right' | 'bottom';
  export type SidePositions = 'left' | 'right';
  export type ContainerPositions = 'left' | 'middle' | 'right';
  export type InnerPositions = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  export type OuterPositions = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  export type CornerPositions = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  export type Variants = 'default' | 'plain' | 'soft' | 'solid';
  export type IconVariants = 'default' | 'plain' | 'soft' | 'solid' | 'text';
  export type InputVariants = 'default' | 'outlined' | 'soft';
  export type TitleVariants =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6';
};
