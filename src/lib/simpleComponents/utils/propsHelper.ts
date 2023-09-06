import { twMerge } from 'tailwind-merge';

export const mergeClasses = (...classNames: Array<Record<string, string> | undefined | null | boolean | string>): string => twMerge(classNames.filter((className) => typeof className === 'string' || (typeof className === 'object' && className !== null)).map((className) => {
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
