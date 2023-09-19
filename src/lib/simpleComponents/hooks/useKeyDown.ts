import { useEffect } from 'react';

const useKeyDown = (onKeydown?: () => void, key?: string, enabled: boolean = true): void => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === key && onKeydown !== undefined) {
        onKeydown();
      }
    };

    if (enabled && onKeydown !== undefined && key !== undefined) {
      document.addEventListener('keydown', keyDownHandler);
    };

    return () => {
      if (enabled && onKeydown !== undefined && key !== undefined) {
        document.removeEventListener('keydown', keyDownHandler);
      }
    };
  }, [onKeydown, key, enabled]);
};

export default useKeyDown;
