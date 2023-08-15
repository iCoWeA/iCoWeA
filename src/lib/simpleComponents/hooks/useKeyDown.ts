import { useEffect } from 'react';

const useKeyDown = (element: HTMLElement, key: string, dispatchKeyDown: () => void): void => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === key) {
        dispatchKeyDown();
      }
    };

    element.addEventListener('keydown', keyDownHandler);

    return () => {
      element.removeEventListener('keydown', keyDownHandler);
    };
  }, [element, key, dispatchKeyDown]);
};

export default useKeyDown;
