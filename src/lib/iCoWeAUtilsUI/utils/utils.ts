export const convertRemToPixels = (rem: number): number => (rem * parseFloat(getComputedStyle(document.documentElement).fontSize));

export const upperCaseFirstLetter = (string: string): string => string.length > 0 ? string[0].toUpperCase() + string.slice(1) : string;
