export interface Position {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

export interface Cords {
  top: number;
  left: number;
}

export const getViewportCords = (): { top: number; bottom: number; left: number; right: number; } => ({ top: document.documentElement.scrollTop, left: document.documentElement.scrollLeft, bottom: document.documentElement.scrollTop + document.documentElement.clientHeight, right: document.documentElement.scrollLeft + document.documentElement.clientWidth });

export const calculateResponsiveCords = (anchor?: HTMLElement | null, element?: HTMLElement | null, position: Positions = 'bottom', gap: number = 0, responsive: boolean = false): Cords => {
  const cords: Cords = { top: 0, left: 0 };

  if (anchor === undefined || anchor === null || element === undefined || element === null) {
    return cords;
  }

  const positions = position.split('-');
  const viewportCords = getViewportCords();

  gap = gap * parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (positions[0] === 'top') {
    cords.top = anchor.offsetTop - gap - element.offsetHeight;
    cords.top = responsive && cords.top < viewportCords.top ? anchor.offsetTop + gap + anchor.offsetHeight : cords.top;
  }

  if (positions[0] === 'bottom') {
    cords.top = anchor.offsetTop + gap + anchor.offsetHeight;
    cords.top = responsive && cords.top + element.offsetHeight > viewportCords.bottom ? anchor.offsetTop - gap - element.offsetHeight : cords.top;
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === 'start') {
    cords.top = anchor.offsetTop;
    cords.top = responsive && cords.top + element.offsetHeight > viewportCords.bottom ? anchor.offsetTop + anchor.offsetHeight - element.offsetHeight : cords.top;
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === 'end') {
    cords.top = anchor.offsetTop + anchor.offsetHeight - element.offsetHeight;
    cords.top = responsive && cords.top < viewportCords.top ? anchor.offsetTop : cords.top;
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === undefined) {
    cords.top = anchor.offsetTop + (anchor.offsetHeight / 2) - (element.offsetHeight / 2);
    cords.top = responsive && cords.top < viewportCords.top && cords.top + element.offsetHeight < viewportCords.bottom ? viewportCords.top : cords.top;
    cords.top = responsive && cords.top > anchor.offsetTop ? anchor.offsetTop : cords.top;
    cords.top = responsive && cords.top > viewportCords.top && cords.top + element.offsetHeight > viewportCords.bottom ? viewportCords.bottom - element.offsetHeight : cords.top;
    cords.top = responsive && cords.top + element.offsetHeight < anchor.offsetTop + anchor.offsetHeight ? anchor.offsetTop + anchor.offsetHeight - element.offsetHeight : cords.top;
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === 'start') {
    cords.left = anchor.offsetLeft;
    cords.left = responsive && cords.left + element.offsetWidth > viewportCords.right ? anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth : cords.left;
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === 'end') {
    cords.left = anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth;
    cords.left = responsive && cords.left < viewportCords.left ? anchor.offsetLeft : cords.left;
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === undefined) {
    cords.left = anchor.offsetLeft + (anchor.offsetWidth / 2) - (element.offsetWidth / 2);
    cords.left = responsive && cords.left + element.offsetWidth > viewportCords.right && cords.left > viewportCords.left ? viewportCords.right - element.offsetWidth : cords.left;
    cords.left = responsive && cords.left + element.offsetWidth < anchor.offsetLeft + anchor.offsetWidth ? anchor.offsetLeft + anchor.offsetWidth - element.offsetWidth : cords.left;
    cords.left = responsive && cords.left < viewportCords.left && cords.left + element.offsetWidth < viewportCords.right ? viewportCords.left : cords.left;
    cords.left = responsive && cords.left > anchor.offsetLeft ? anchor.offsetLeft : cords.left;
  }

  if (positions[0] === 'left') {
    cords.left = anchor.offsetLeft - gap - element.offsetWidth;
    cords.left = responsive && cords.left < viewportCords.left ? anchor.offsetLeft + gap + anchor.offsetWidth : cords.left;
  }

  if (positions[0] === 'right') {
    cords.left = anchor.offsetLeft + gap + anchor.offsetWidth;
    cords.left = responsive && cords.left > viewportCords.right ? anchor.offsetLeft - gap - element.offsetWidth : cords.left;
  }

  return cords;
};

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
};
