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

      const x = event.clientX;
      const y = event.clientY;

      const { left, top } = anchorRef.current.getBoundingClientRect();
      const width = anchorRef.current.offsetWidth;
      const height = anchorRef.current.offsetHeight;

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      let a = Math.abs(x - centerX);
      let b = Math.abs(y - centerY);
      const A = Math.atan(a / b);

      a = Math.round(Math.sin(A) * distance * 1000) / 1000;
      b = Math.round(Math.cos(A) * distance * 1000) / 1000;

      if (reverse) {
        a = centerX < x ? -a : a;
        b = centerY < y ? -b : b;
      } else {
        a = centerX <= x ? a : -a;
        b = centerY <= y ? b : -b;
      }

      imageRef.current.style.left = `${a}px`;
      imageRef.current.style.top = `${b}px`;
    };

    window.addEventListener('mousemove', moveHandler);

    return () => window.removeEventListener('mousemove', moveHandler);
  }, [distance, reverse]);
};

export default useMoveAxisToCursor;
