export interface PositionProps {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface Position {
  top: number;
  left: number;
}

export const setOrigin = (anchor?: HTMLElement | null, positionProps?: PositionProps, element?: HTMLElement | null, transformPositionProps?: PositionProps): Position => {
  const position: Position = { top: 0, left: 0 };

  if (anchor === undefined || anchor === null) {
    return position;
  }

  position.top = anchor.offsetTop;
  position.left = anchor.offsetLeft;

  if (positionProps?.vertical === 'center') {
    position.top += anchor.offsetHeight / 2;
  }

  if (positionProps?.vertical === 'bottom') {
    position.top += anchor.offsetHeight;
  }

  if (positionProps?.horizontal === 'center') {
    position.left += anchor.offsetWidth / 2;
  }

  if (positionProps?.horizontal === 'right') {
    position.left += anchor.offsetWidth;
  }

  if (element === undefined || element === null) {
    return position;
  }

  if (transformPositionProps?.vertical === 'center') {
    position.top -= element.offsetHeight / 2;
  }

  if (transformPositionProps?.vertical === 'bottom') {
    position.top -= element.offsetHeight;
  }

  if (transformPositionProps?.horizontal === 'center') {
    position.left -= element.offsetWidth / 2;
  }

  if (transformPositionProps?.horizontal === 'right') {
    position.left -= element.offsetWidth;
  }

  return position;
};
