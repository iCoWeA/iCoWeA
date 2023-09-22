import { useEffect } from 'react';

const useScroll = (onResize?: (() => void) | null): void => {
  useEffect(() => {
    if (onResize === undefined || onResize === null) {
      return;
    }

    document.addEventListener('scroll', onResize);

    return () => {
      document.removeEventListener('scroll', onResize);
    };
  }, [onResize]);
};

export default useScroll;
