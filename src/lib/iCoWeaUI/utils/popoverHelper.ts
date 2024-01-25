export const setPosition = (element: HTMLElement, position: OuterPositions, anchorX: number, anchorY: number, anchorTop: number, anchorLeft: number, anchorHeight: number, anchorWidth: number, offset: number = 0, responsive: boolean = false): OuterPositions => {
  const cords = { top: anchorTop, left: anchorLeft };
  const positions = position.split('-');
  const viewport = { top: document.documentElement.scrollTop, left: document.documentElement.scrollLeft, height: document.documentElement.clientHeight, width: document.documentElement.clientWidth };
  const defaultPosition = position;

  const elementCoords = element.getBoundingClientRect();

  setOffset(element, position, offset);

  if (positions[0] === 'top') {
    cords.top = anchorTop - elementCoords.height;
    position = 'top';

    if (responsive && anchorY - elementCoords.height < 0) {
      cords.top = anchorTop + anchorHeight;
      position = 'bottom';
    }
  }

  if (positions[0] === 'bottom') {
    cords.top = anchorTop + anchorHeight;
    position = 'bottom';

    if (responsive && anchorY + anchorHeight + elementCoords.height > viewport.height) {
      cords.top = anchorTop - elementCoords.height;
      position = 'top';
    }
  }

  if (positions[0] === 'left') {
    cords.left = anchorLeft - elementCoords.width;
    position = 'left';

    if (responsive && anchorX - elementCoords.width < 0) {
      cords.left = anchorLeft + anchorWidth;
      position = 'right';
    }
  }

  if (positions[0] === 'right') {
    cords.left = anchorLeft + anchorWidth;
    position = 'right';

    if (responsive && anchorX + anchorWidth + elementCoords.width > viewport.width) {
      cords.left = anchorLeft - elementCoords.width;
      position = 'left';
    }
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === 'start') {
    cords.left = anchorLeft;
    position += '-start';

    if (responsive && anchorWidth > elementCoords.width && anchorX < 0) {
      const overflowSize = -anchorX;

      if (cords.left + overflowSize + elementCoords.width > anchorLeft + anchorWidth) {
        cords.left = anchorLeft + anchorWidth - elementCoords.width;
      } else {
        cords.left = cords.left + overflowSize;
      }
    }
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === 'end') {
    cords.left = anchorLeft + anchorWidth - elementCoords.width;
    position += '-end';

    if (responsive && anchorWidth > elementCoords.width && anchorX + anchorWidth > viewport.width) {
      const overflowSize = anchorX + anchorWidth - viewport.width;

      if (cords.left - overflowSize < anchorLeft) {
        cords.left = anchorLeft;
      } else {
        cords.left = cords.left - overflowSize;
      }
    }
  }

  if ((positions[0] === 'top' || positions[0] === 'bottom') && positions[1] === undefined) {
    const center = (anchorWidth / 2) - (elementCoords.width / 2);

    cords.left = anchorLeft + center;

    if (responsive && anchorWidth > elementCoords.width && anchorX + center < 0) {
      const overflowSize = -(anchorX + center);

      if (cords.left + overflowSize + elementCoords.width > anchorLeft + anchorWidth) {
        cords.left = anchorLeft + anchorWidth - elementCoords.width;
      } else {
        cords.left = cords.left + overflowSize;
      }
    }

    if (responsive && anchorWidth > elementCoords.width && anchorX + center + elementCoords.width > viewport.width) {
      const overflowSize = anchorX + center + elementCoords.width - viewport.width;

      if (cords.left - overflowSize < anchorLeft) {
        cords.left = anchorLeft;
      } else {
        cords.left = cords.left - overflowSize;
      }
    }
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === 'start') {
    cords.top = anchorTop;
    position += '-start';

    if (responsive && anchorHeight > elementCoords.height && anchorY < 0) {
      const overflowSize = -anchorY;

      if (cords.top + overflowSize + elementCoords.height > anchorTop + anchorHeight) {
        cords.top = anchorTop + anchorHeight - elementCoords.height;
      } else {
        cords.top = cords.top + overflowSize;
      }
    }
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === 'end') {
    cords.top = anchorTop + anchorHeight - elementCoords.height;
    position += '-end';

    if (responsive && anchorHeight > elementCoords.height && anchorY + anchorHeight > viewport.height) {
      const overflowSize = anchorY + anchorHeight - viewport.height;

      if (cords.top - overflowSize < anchorTop) {
        cords.top = anchorTop;
      } else {
        cords.top = cords.top - overflowSize;
      }
    }
  }

  if ((positions[0] === 'left' || positions[0] === 'right') && positions[1] === undefined) {
    const center = (anchorHeight / 2) - (elementCoords.height / 2);

    cords.top = anchorTop + center;

    if (responsive && anchorHeight > elementCoords.height && anchorY + center < 0) {
      const overflowSize = -(anchorY + center);

      if (cords.top + overflowSize + elementCoords.height > anchorTop + anchorHeight) {
        cords.top = anchorTop + anchorHeight - elementCoords.height;
      } else {
        cords.top = cords.top + overflowSize;
      }
    }

    if (responsive && anchorHeight > elementCoords.height && anchorY + center + elementCoords.height > viewport.height) {
      const overflowSize = anchorY + center + elementCoords.height - viewport.height;

      if (cords.top - overflowSize < anchorTop) {
        cords.top = anchorTop;
      } else {
        cords.top = cords.top - overflowSize;
      }
    }
  }

  element.style.top = `${cords.top}px`;
  element.style.left = `${cords.left}px`;

  if (defaultPosition !== position) {
    setOffset(element, position, offset);
  }

  return position;
};

export const setOffset = (element: HTMLElement, position: OuterPositions, offset: number = 0): void => {
  if (offset <= 0) {
    return;
  }

  if (position.startsWith('top')) {
    element.style.padding = `0px 0px ${offset}px 0px`;
  }

  if (position.startsWith('bottom')) {
    element.style.padding = `${offset}px 0px 0px 0px`;
  }

  if (position.startsWith('left')) {
    element.style.padding = `0px ${offset}px 0px 0px`;
  }

  if (position.startsWith('right')) {
    element.style.padding = `0px 0px 0px ${offset}px`;
  }
};
