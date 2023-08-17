export interface Position {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface Cords {
  top: number;
  left: number;
}

export const setCords = (anchor?: HTMLElement | null, position?: Position, element?: HTMLElement | null, transformPosition?: Position): Cords => {
  const cords: Cords = { top: 0, left: 0 };

  if (anchor === undefined || anchor === null) {
    return cords;
  }

  cords.top = anchor.offsetTop;
  cords.left = anchor.offsetLeft;

  if (position?.vertical === 'center') {
    cords.top += anchor.offsetHeight / 2;
  }

  if (position?.vertical === 'bottom') {
    cords.top += anchor.offsetHeight;
  }

  if (position?.horizontal === 'center') {
    cords.left += anchor.offsetWidth / 2;
  }

  if (position?.horizontal === 'right') {
    cords.left += anchor.offsetWidth;
  }

  if (element === undefined || element === null) {
    return cords;
  }

  if (transformPosition?.vertical === 'center') {
    cords.top -= element.offsetHeight / 2;
  }

  if (transformPosition?.vertical === 'bottom') {
    cords.top -= element.offsetHeight;
  }

  if (transformPosition?.horizontal === 'center') {
    cords.left -= element.offsetWidth / 2;
  }

  if (transformPosition?.horizontal === 'right') {
    cords.left -= element.offsetWidth;
  }

  return cords;
};
