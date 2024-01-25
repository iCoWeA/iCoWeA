import { type ReactElement, type MutableRefObject } from 'react';
import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...classNames: Array<Record<string, string> | any>): string => twMerge(classNames.filter((className) => typeof className === 'string' || (typeof className === 'object' && className !== null)).map((className) => {
  if (typeof className === 'object' && className !== null) {
    return Object.values(className).join(' ');
  }

  return className;
}).join(' '));

export const isLast = (array: any[], index: number): boolean => (array.length - 1 === index);

export const deepClone = <T>(object: T): T => {
  const newObject: Record<string, any> = {};

  for (const key in object) {
    newObject[key] = object[key] === 'object' ? deepClone(object[key]) : object[key];
  }

  return newObject as T;
};

export const convertRemToPixels = (rem: number): number => (rem * parseFloat(getComputedStyle(document.documentElement).fontSize));

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
