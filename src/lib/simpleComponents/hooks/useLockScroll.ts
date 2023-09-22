import { useEffect } from 'react';

const useLockScroll = (lock: boolean): void => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = 'hidden';
    }
  }, [lock]);
};

export default useLockScroll;
