import { useEffect } from 'react';

const useKeyDown = (key: string, dispatchKeyDown: () => void, dependencies?: any[]): void => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === key) {
        dispatchKeyDown();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, dependencies);
};

export default useKeyDown;
