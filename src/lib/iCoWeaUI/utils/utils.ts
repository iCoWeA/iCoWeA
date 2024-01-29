import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...classNames: Array<Record<string, string> | any>): string => twMerge(classNames.filter((className) => typeof className === 'string' || (typeof className === 'object' && className !== null)).map((className) => {
  if (typeof className === 'object' && className !== null) {
    return Object.values(className).join(' ');
  }

  return className;
}).join(' '));
