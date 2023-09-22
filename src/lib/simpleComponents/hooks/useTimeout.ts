import { useEffect } from 'react';

const useTimeout = (onClose: (() => void) | null, closeDuration: number = 0): void => {
  useEffect(() => {
    if (onClose === null) {
      return;
    }

    const timerId = window.setTimeout(() => {
      onClose();
    }, closeDuration);

    return () => {
      clearTimeout(timerId);
    };
  }, [onClose, closeDuration]);
};

export default useTimeout;
