import { useEffect } from 'react';

const useResize = (onResize?: (() => void) | null): void => {
  useEffect(() => {
    if (onResize === undefined || onResize === null) {
      return;
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);
};

export default useResize;
