import { useEffect } from 'react';

const useScroll = (onScroll: (event?: Event) => void, enabled: boolean = true): void => {
  useEffect(() => {
    if (enabled) {
      document.addEventListener('scroll', onScroll);
    }

    return () => {
      if (enabled) {
        document.removeEventListener('scroll', onScroll);
      }
    };
  }, [onScroll, enabled]);
};

export default useScroll;
