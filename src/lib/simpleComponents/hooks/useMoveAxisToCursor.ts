import { type RefObject, useState, useEffect } from 'react';

interface State {
  width: number;
  height: number;
  x: number;
  y: number;
}

const useMoveAxisToCursor: <T extends HTMLElement>(ref: RefObject<T>, distance: number, reverse?: boolean, defaultWidth?: number, defaultHeight?: number) => State = (ref, distance, reverse, defaultWidth = 0, defaultHeight = 0) => {
  const [position, setPosition] = useState(() => ({ width: defaultWidth, height: defaultHeight, x: 0, y: 0 }));

  useEffect(() => {
    const resizeHandler: () => void = () => {
      setPosition((state) => {
        if (ref.current === null) {
          return state;
        }

        return { x: state.x, y: state.y, width: ref.current.offsetWidth === 0 ? 0 : ref.current.offsetWidth + (2 * distance), height: ref.current.offsetHeight === 0 ? 0 : ref.current.offsetHeight + (2 * distance) };
      });
    };

    const positionHandler: (event: MouseEvent) => void = (event) => {
      setPosition((state) => {
        if (ref.current === null) {
          return state;
        }

        const { clientX: x, clientY: y } = event;

        const { left, top } = ref.current.getBoundingClientRect();
        const width = ref.current.offsetWidth;
        const height = ref.current.offsetHeight;
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const c = distance;
        let a = Math.abs(x - centerX);
        let b = Math.abs(y - centerY);
        const A = Math.atan(a / b);

        a = Math.round(Math.sin(A) * c * 1000) / 1000;
        b = Math.round(Math.cos(A) * c * 1000) / 1000;

        if (reverse === true) {
          a = centerX < x ? -distance - a : -distance + a;
          b = centerY < y ? -distance - b : -distance + b;
        } else {
          a = centerX < x ? -distance - a : -distance + a;
          b = centerY < y ? -distance - b : -distance + b;
        }

        return { x: a, y: b, width: width === 0 ? 0 : width + (2 * distance), height: height === 0 ? 0 : height + (2 * distance) };
      });
    };

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', positionHandler);

    return () => {
      document.removeEventListener('resize', resizeHandler);
      document.removeEventListener('mousemove', positionHandler);
    };
  }, []);

  return position;
};

export default useMoveAxisToCursor;
