import { type CSSProperties } from 'react';

export const mergeStyles: (...styles: Array<CSSProperties | undefined>) => CSSProperties = (...styles) => Object.assign({}, ...styles);

export const mergeClasses: (...classNames: Array<Record<string, string> | undefined | null | boolean | string>) => string =
(...classNames) => classNames.filter((className) => typeof className === 'string' || (typeof className === 'object' && className !== null)).map((className) => {
  if (typeof className === 'object' && className !== null) {
    return Object.values(className).join(' ');
  }

  return className;
}).join(' ');

export const isLast: (array: any[], index: number) => boolean = (array, index) => (array.length - 1 === index);
