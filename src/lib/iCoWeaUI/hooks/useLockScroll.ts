import { useEffect } from 'react';

const useLockScroll = (lock: boolean): void => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [lock]);
};

export default useLockScroll;
