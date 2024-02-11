export const setPlacement = (element: HTMLElement, placement: OuterPlacements, anchorX: number, anchorY: number, anchorTop: number, anchorLeft: number, anchorHeight: number, anchorWidth: number, offset: number = 0, responsive: boolean = false): OuterPlacements => {
  const cords = { top: anchorTop, left: anchorLeft };
  const splittedPlacements = placement.split('-');
  const viewport = { top: document.documentElement.scrollTop, left: document.documentElement.scrollLeft, height: document.documentElement.clientHeight, width: document.documentElement.clientWidth };
  const defaultPosition = placement;

  const elementCoords = element.getBoundingClientRect();

  setOffset(element, placement, offset);

  if (splittedPlacements[0] === 'top') {
    cords.top = anchorTop - elementCoords.height;
    placement = 'top';

    if (responsive && anchorY - elementCoords.height < 0) {
      cords.top = anchorTop + anchorHeight;
      placement = 'bottom';
    }
  }

  if (splittedPlacements[0] === 'bottom') {
    cords.top = anchorTop + anchorHeight;
    placement = 'bottom';

    if (responsive && anchorY + anchorHeight + elementCoords.height > viewport.height) {
      cords.top = anchorTop - elementCoords.height;
      placement = 'top';
    }
  }

  if (splittedPlacements[0] === 'left') {
    cords.left = anchorLeft - elementCoords.width;
    placement = 'left';

    if (responsive && anchorX - elementCoords.width < 0) {
      cords.left = anchorLeft + anchorWidth;
      placement = 'right';
    }
  }

  if (splittedPlacements[0] === 'right') {
    cords.left = anchorLeft + anchorWidth;
    placement = 'right';

    if (responsive && anchorX + anchorWidth + elementCoords.width > viewport.width) {
      cords.left = anchorLeft - elementCoords.width;
      placement = 'left';
    }
  }

  if ((splittedPlacements[0] === 'top' || splittedPlacements[0] === 'bottom') && splittedPlacements[1] === 'start') {
    cords.left = anchorLeft;
    placement += '-start';

    if (responsive && anchorWidth > elementCoords.width && anchorX < 0) {
      const overflowSize = -anchorX;

      if (cords.left + overflowSize + elementCoords.width > anchorLeft + anchorWidth) {
        cords.left = anchorLeft + anchorWidth - elementCoords.width;
      } else {
        cords.left = cords.left + overflowSize;
      }
    }
  }

  if ((splittedPlacements[0] === 'top' || splittedPlacements[0] === 'bottom') && splittedPlacements[1] === 'end') {
    cords.left = anchorLeft + anchorWidth - elementCoords.width;
    placement += '-end';

    if (responsive && anchorWidth > elementCoords.width && anchorX + anchorWidth > viewport.width) {
      const overflowSize = anchorX + anchorWidth - viewport.width;

      if (cords.left - overflowSize < anchorLeft) {
        cords.left = anchorLeft;
      } else {
        cords.left = cords.left - overflowSize;
      }
    }
  }

  if ((splittedPlacements[0] === 'top' || splittedPlacements[0] === 'bottom') && splittedPlacements[1] === undefined) {
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

  if ((splittedPlacements[0] === 'left' || splittedPlacements[0] === 'right') && splittedPlacements[1] === 'start') {
    cords.top = anchorTop;
    placement += '-start';

    if (responsive && anchorHeight > elementCoords.height && anchorY < 0) {
      const overflowSize = -anchorY;

      if (cords.top + overflowSize + elementCoords.height > anchorTop + anchorHeight) {
        cords.top = anchorTop + anchorHeight - elementCoords.height;
      } else {
        cords.top = cords.top + overflowSize;
      }
    }
  }

  if ((splittedPlacements[0] === 'left' || splittedPlacements[0] === 'right') && splittedPlacements[1] === 'end') {
    cords.top = anchorTop + anchorHeight - elementCoords.height;
    placement += '-end';

    if (responsive && anchorHeight > elementCoords.height && anchorY + anchorHeight > viewport.height) {
      const overflowSize = anchorY + anchorHeight - viewport.height;

      if (cords.top - overflowSize < anchorTop) {
        cords.top = anchorTop;
      } else {
        cords.top = cords.top - overflowSize;
      }
    }
  }

  if ((splittedPlacements[0] === 'left' || splittedPlacements[0] === 'right') && splittedPlacements[1] === undefined) {
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

  if (defaultPosition !== placement) {
    setOffset(element, placement, offset);
  }

  return placement;
};

export const setOffset = (element: HTMLElement, placement: OuterPlacements, offset: number = 0): void => {
  if (offset <= 0) {
    return;
  }

  if (placement.startsWith('top')) {
    element.style.padding = `0px 0px ${offset}px 0px`;
  }

  if (placement.startsWith('bottom')) {
    element.style.padding = `${offset}px 0px 0px 0px`;
  }

  if (placement.startsWith('left')) {
    element.style.padding = `0px ${offset}px 0px 0px`;
  }

  if (placement.startsWith('right')) {
    element.style.padding = `0px 0px 0px ${offset}px`;
  }
};

export const setArrowPlacement = (arrow: HTMLElement, placement: OuterPlacements): void => {
  if (placement.startsWith('top')) {
    arrow.style.top = '100%';
    arrow.style.left = '50%';
    arrow.style.transform = 'translateX(-50%)';
  }

  if (placement.startsWith('bottom')) {
    arrow.style.top = '0%';
    arrow.style.left = '50%';
    arrow.style.transform = 'translate(-50%, -100%) rotate(-180deg)';
  }

  if (placement.startsWith('left')) {
    arrow.style.top = '50%';
    arrow.style.left = '100%';
    arrow.style.transform = 'translateY(-50%) rotate(-90deg)';
  }

  if (placement.startsWith('right')) {
    arrow.style.top = '50%';
    arrow.style.left = '0%';
    arrow.style.transform = 'translate(-100%, -50%) rotate(90deg)';
  }
};
