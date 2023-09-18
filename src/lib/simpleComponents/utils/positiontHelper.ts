export const getViewportCords = (): { top: number; bottom: number; left: number; right: number; } => ({ top: document.documentElement.scrollTop, left: document.documentElement.scrollLeft, bottom: document.documentElement.scrollTop + document.documentElement.clientHeight, right: document.documentElement.scrollLeft + document.documentElement.clientWidth });

export const setElementPosition = (element: HTMLElement | null, position: OuterPositions, anchorTop?: number, anchorLeft?: number, anchorHeight: number = 0, anchorWidth: number = 0, offset: number = 0, responsive: boolean = false): OuterPositions => {
  if (element === null || anchorTop === undefined || anchorLeft === undefined) {
    return position;
  }

  const cords = { top: anchorTop, left: anchorLeft };
  const positions = position.split('-');
  const viewportCords = getViewportCords();

  if (positions[0] === 'top') {
    cords.top = anchorTop - offset - element.offsetHeight;
    position = 'top';

    if (responsive && cords.top < viewportCords.top) {
      cords.top = anchorTop + anchorHeight + offset;
      position = 'bottom';
    }
  }

  if (positions[0] === 'bottom') {
    cords.top = anchorTop + anchorHeight + offset;
    position = 'bottom';

    if (responsive && cords.top + element.offsetHeight > viewportCords.bottom) {
      cords.top = anchorTop - offset - element.offsetHeight;
      position = 'top';
    }
  }

  if (positions[0] === 'left') {
    cords.left = anchorLeft - offset - element.offsetWidth;
    position = 'left';

    if (responsive && cords.left < viewportCords.left) {
      cords.left = anchorLeft + anchorWidth + offset;
      position = 'right';
    }
  }

  if (positions[0] === 'right') {
    cords.left = anchorLeft + offset + anchorWidth;
    position = 'right';

    if (responsive && cords.left + element.offsetWidth > viewportCords.right) {
      cords.left = anchorLeft - offset - element.offsetWidth;
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
