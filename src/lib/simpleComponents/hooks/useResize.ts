import { useEffect } from 'react';

const useResize = (onResize: (event?: UIEvent) => void, enabled: boolean = true): void => {
  useEffect(() => {
    if (enabled) {
      window.addEventListener('resize', onResize);
    }

    return () => {
      if (enabled) {
        window.removeEventListener('resize', onResize);
      }
    };
  }, [onResize, enabled]);
};

export default useResize;
