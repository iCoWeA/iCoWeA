import { type MutableRefObject, useEffect } from 'react';

const useMoveAxisToCursor = (anchorRef: MutableRefObject<HTMLDivElement | null>, imageRef: MutableRefObject<HTMLImageElement | null>, distance: number = 0, reverse: boolean = false): void => {
  useEffect(() => {
    if (!anchorRef.current || !imageRef.current || anchorRef.current === null || imageRef.current === null) {
      return;
    }

    const moveHandler: (event: MouseEvent) => void = (event) => {
      if (anchorRef.current === null || imageRef.current === null) {
        return;
      }

      const clientX = event.clientX;
      const clieentY = event.clientY;

      const { x, y } = anchorRef.current.getBoundingClientRect();
      const width = anchorRef.current.offsetWidth;
      const height = anchorRef.current.offsetHeight;

      const centerX = x + width / 2;
      const centerY = y + height / 2;

      let left = Math.abs(clientX - centerX);
      let top = Math.abs(clieentY - centerY);
      const A = Math.atan(left / top);

      left = Math.round(Math.sin(A) * distance * 1000) / 1000;
      top = Math.round(Math.cos(A) * distance * 1000) / 1000;

      if (reverse) {
        left = centerX < clientX ? -left : left;
        top = centerY < clieentY ? -top : top;
      } else {
        left = centerX <= clientX ? left : -left;
        top = centerY <= clieentY ? top : -top;
      }

      imageRef.current.style.left = `${left}px`;
      imageRef.current.style.top = `${top}px`;
    };

    window.addEventListener('mousemove', moveHandler);

    return () => window.removeEventListener('mousemove', moveHandler);
  }, [distance, reverse]);
};

export default useMoveAxisToCursor;
