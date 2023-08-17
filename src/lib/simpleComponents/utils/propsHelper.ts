import { type CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

export const mergeStyles = (...styles: Array<CSSProperties | undefined>): CSSProperties => Object.assign({}, ...styles);

export const mergeClasses = (...classNames: Array<Record<string, string> | undefined | null | boolean | string>): string => twMerge(classNames.filter((className) => typeof className === 'string' || (typeof className === 'object' && className !== null)).map((className) => {
  if (typeof className === 'object' && className !== null) {
    return Object.values(className).join(' ');
  }

  return className;
}).join(' '));

export const isLast = (array: any[], index: number): boolean => (array.length - 1 === index);

export const deepClone = (object: Record<string, any>): Record<string, any> => {
  const newObject: Record<string, any> = {};

  for (const key in object) {
    newObject[key] = object[key] === 'object' ? deepClone(object[key]) : object[key];
  }

  return newObject;
};

export const setDefaultProps = <T extends Record<string, any>, V extends Record<string, any>>(props: T, defaultProps: V): T & V => {
  const newProps: Record<string, any> = Object.assign({}, props);

  for (const key in defaultProps) {
    newProps[key] = typeof newProps[key] === 'object' && typeof defaultProps[key] === 'object' ? setDefaultProps(newProps[key], defaultProps[key]) : newProps[key] ?? defaultProps[key];
  }

  return newProps as T & V;
};
