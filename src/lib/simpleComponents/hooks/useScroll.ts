import { useEffect } from 'react';

const useScroll = (onScroll?: (event?: Event) => void, enabled: boolean = true): void => {
  useEffect(() => {
    if (enabled && onScroll !== undefined) {
      document.addEventListener('scroll', onScroll);
    }

    return () => {
      if (enabled && onScroll !== undefined) {
        document.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll, enabled]);
};

export default useScroll;
