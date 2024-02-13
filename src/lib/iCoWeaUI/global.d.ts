export {};

declare global {
  export type Obj = Record<string, string>;
  export type Placements = 'top' | 'left' | 'right' | 'bottom';
  export type SidePlacements = 'left' | 'right';
  export type BoxPlacements = 'left' | 'middle' | 'right';
  export type InnerPlacements = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  export type OuterPlacements = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  export type CornerPlacements = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  export type Positions = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
  export type Orientations = 'vertical' | 'horizontal';
  export type Sizes = 'sm' | 'md' | 'lg';
  export type TitleSizes =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6';
  export type Spacings = 'none' | 'sm' | 'md' | 'lg';
  export type PanelSpacings = 'none' | 'sm' | 'md' | 'lg' | 'sm-panel' | 'md-panel' | 'lg-panel';
  export type ClosableSizes = 'sm' | 'md' | 'lg' | 'sm-panel' | 'md-panel' | 'lg-panel';
  export type IconSpacing = 'default' | 'icon' | 'text';
  export type Themes = 'light' | 'dark';
  export type DefaultColors = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  export type Colors = 'inherit' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  export type DefaultTextColors = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'on-neutral' | 'on-primary' | 'on-secondary' | 'on-success' | 'on-warning' | 'on-error';
  export type TextColors = 'inherit' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'on-neutral' | 'on-primary' | 'on-secondary' | 'on-success' | 'on-warning' | 'on-error';
  export type Borders = 'none' | 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right' | boolean;
  export type Radiuses = 'none' | 'rounded' | 'circular';
  export type Underlines = 'none' | 'hover' | 'always';
  export type Directions = 'row' | 'col' | 'row-reverse' | 'col-reverse';
  export type Flows = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
  export type Wraps = 'nowrap' | 'wrap' | 'wrap-reverse';
  export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  export type AlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline';
  export type JustifyItems = 'stretch' | 'start' | 'end' | 'center';
  export type AlignItems = 'stretch' | 'start' | 'end' | 'center' | 'baseline';
  export type Aligns = 'left' | 'right' | 'center' | 'justify';
  export type Gaps = 'none' | 'base' | 'sm' | 'md' | 'lg';
  export type BoxGaps = 'none' | 'base' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  export type Backdrop = 'none' | 'visible' | 'invisible';
  export type Transitions = 'fade' | 'grow-x' | 'grow-y' | 'grow' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
  export type Layouts = 'root' | 'default' | 'standard' | 'dashboard' | 'fullbleed';
  export type ContainerLayouts = 'default' | 'header' | 'footer' | 'body';
  export type Closable = 'none' | 'left' | 'right';
  export type Variants = 'default' | 'text' | 'soft' | 'plain' | 'solid';
  export type TextVariants = 'default' | 'solid';
  export type InputVariants = 'default' | 'outlined' | 'soft';
  export type CursorPosition = {
    x: number;
    y: number;
  };
};
