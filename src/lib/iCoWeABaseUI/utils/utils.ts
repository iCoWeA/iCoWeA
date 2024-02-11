import { type ReactElement, type MutableRefObject } from 'react';

export const isLast = (array: any[], index: number): boolean => (array.length - 1 === index);

export const cloneRef = (element: ReactElement, elementRef: MutableRefObject<HTMLElement | null>): ((HTMLelement: HTMLElement) => void) => (HTMLelement) => {
  const ref = (element as any).ref;

  if (ref === undefined || ref === null) {
    elementRef.current = HTMLelement;
  } else if (typeof ref === 'function') {
    elementRef.current = HTMLelement;
    ref(HTMLelement);
  } else {
    elementRef.current = HTMLelement;
    ref.current = HTMLelement;
  };
};

export const getFocusableElements = (element: HTMLElement): HTMLElement[] => [...element.querySelectorAll<HTMLElement>(
  'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
)
].filter(
  el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
);

export const getBorderType = (border: Borders): 'none' | 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right' => {
  if (typeof border === 'boolean') {
    return border ? 'all' : 'none';
  }

  return border;
};

export const addPanelSize = (size: Spacings): PanelSpacings => (size + '-panel') as PanelSpacings;

export const cutPanelSize = (size: PanelSpacings): Spacings => size.replace('-panel', '') as Spacings;

export const reverseColor = (variant: Variants, color: DefaultColors): DefaultTextColors => (variant === 'default' || variant === 'solid' ? 'on-' + color : color) as DefaultTextColors;

export const cutTextColor = (color: TextColors): Colors => color.replace('on-', '') as Colors;

export const getBorderVariant = (variant: Variants): TextVariants => variant === 'default' || variant === 'solid' ? 'default' : 'solid';

export const getInputVariant = (color: DefaultTextColors): 'default' | 'solid' => color.startsWith('on') ? 'default' : 'solid';
