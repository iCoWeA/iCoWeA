import { useEffect } from 'react';

const useKeyDown = (element: HTMLElement, key: string, onKeydown: () => void): void => {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === key) {
        onKeydown();
      }
    };

    element.addEventListener('keydown', keyDownHandler);

    return () => {
      element.removeEventListener('keydown', keyDownHandler);
    };
  }, [element, key, onKeydown]);
};

export default useKeyDown;
