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
