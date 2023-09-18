import { useEffect } from 'react';

const useResize = (onResize?: (event?: UIEvent) => void, enabled: boolean = true): void => {
  useEffect(() => {
    if (enabled && onResize !== undefined) {
      window.addEventListener('resize', onResize);
    }

    return () => {
      if (enabled && onResize !== undefined) {
        window.removeEventListener('resize', onResize);
      }
    };
  }, [onResize, enabled]);
};

export default useResize;
