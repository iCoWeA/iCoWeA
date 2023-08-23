export interface Position {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export const getViewportCords = (): { top: number; bottom: number; left: number; right: number; } => ({ top: document.documentElement.scrollTop, left: document.documentElement.scrollLeft, bottom: document.documentElement.scrollTop + document.documentElement.clientHeight, right: document.documentElement.scrollLeft + document.documentElement.clientWidth });

export const setElementPosition = (element: HTMLElement | null, position: Positions, anchorTop: number = 0, anchorLeft: number = 0, anchorHeight: number = 0, anchorWidth: number = 0, gap: number = 0, responsive: boolean = false): Positions => {
  if (element === null) {
    return position;
  }

  const cords = { top: anchorTop, left: anchorLeft };
  const positions = position.split('-');
  const viewportCords = getViewportCords();

  gap = gap * parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (positions[0] === 'top') {
    cords.top = anchorTop - gap - element.offsetHeight;
    position = 'top';

    if (responsive && cords.top < viewportCords.top) {
      cords.top = anchorTop + anchorHeight + gap;
      position = 'bottom';
    }
  }

  if (positions[0] === 'bottom') {
    cords.top = anchorTop + anchorHeight + gap;
    position = 'bottom';

    if (responsive && cords.top + element.offsetHeight > viewportCords.bottom) {
      cords.top = anchorTop - gap - element.offsetHeight;
      position = 'top';
    }
  }

  if (positions[0] === 'left') {
    cords.left = anchorLeft - gap - element.offsetWidth;
    position = 'left';

    if (responsive && cords.left < viewportCords.left) {
      cords.left = anchorLeft + anchorWidth + gap;
      position = 'right';
    }
  }

  if (positions[0] === 'right') {
    cords.left = anchorLeft + gap + anchorWidth;
    position = 'right';

    if (responsive && cords.left + element.offsetWidth > viewportCords.right) {
      cords.left = anchorLeft - gap - element.offsetWidth;
      position = 'left';
    }
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === 'start') {
    cords.left = anchorLeft;
    position += '-start';

    if (responsive && cords.left + element.offsetWidth > viewportCords.right) {
      cords.left = anchorLeft + anchorWidth - element.offsetWidth;
      position = position === 'top' ? 'top-end' : 'bottom-end';
    }
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === 'end') {
    cords.left = anchorLeft + anchorWidth - element.offsetWidth;
    position += '-end';

    if (responsive && cords.left < viewportCords.left) {
      cords.left = anchorLeft;
      position = position === 'top' ? 'top-start' : 'bottom-start';
    }
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === undefined) {
    cords.left = anchorLeft + (anchorWidth / 2) - (element.offsetWidth / 2);

    if (responsive && cords.left + element.offsetWidth > viewportCords.right && cords.left > viewportCords.left) {
      cords.left = viewportCords.right - element.offsetWidth;
      cords.left = cords.left + element.offsetWidth < anchorLeft + anchorWidth ? anchorLeft + anchorWidth - element.offsetWidth : cords.left;
    }

    if (responsive && cords.left < viewportCords.left && cords.left + element.offsetWidth < viewportCords.right) {
      cords.left = viewportCords.left;
      cords.left = cords.left > anchorLeft ? anchorLeft : cords.left;
    }
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === 'start') {
    cords.top = anchorTop;
    position += '-start';

    if (responsive && cords.top + element.offsetHeight > viewportCords.bottom) {
      cords.top = anchorTop + anchorHeight - element.offsetHeight;
      position = position === 'left' ? 'left-end' : 'right-end';
    }
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === 'end') {
    cords.top = anchorTop + anchorHeight - element.offsetHeight;
    position += '-end';

    if (responsive && cords.top < viewportCords.top) {
      cords.top = anchorTop;
      position = position === 'left' ? 'left-start' : 'right-start';
    }
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === undefined) {
    cords.top = anchorTop + (anchorHeight / 2) - (element.offsetHeight / 2);

    if (responsive && cords.top < viewportCords.top && cords.top + element.offsetHeight < viewportCords.bottom) {
      cords.top = viewportCords.top;
      cords.top = cords.top > anchorTop ? anchorTop : cords.top;
    }

    if (responsive && cords.top > viewportCords.top && cords.top + element.offsetHeight > viewportCords.bottom) {
      cords.top = viewportCords.bottom - element.offsetHeight;
      cords.top = cords.top + element.offsetHeight < anchorTop + anchorHeight ? anchorTop + anchorHeight - element.offsetHeight : cords.top;
    }
  }

  element.style.top = `${cords.top}px`;
  element.style.left = `${cords.left}px`;

  return position;
};

/*
export const calculateCords = (anchor?: HTMLElement | null, element?: HTMLElement | null, position?: Position, transformPosition?: Position): Cords => {
  const cords: Cords = { top: 0, left: 0 };

  if (anchor === undefined || anchor === null || element === undefined || element === null) {
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
}; */
