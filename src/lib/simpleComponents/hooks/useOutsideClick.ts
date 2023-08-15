import { useEffect } from 'react';

const useOutsideClick = (element?: HTMLElement | null, onOutsideClick?: () => void, onInsideClick?: () => void): void => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent): void => {
      if (element === undefined || element === null || !element.contains(event.target as Node)) {
        if (onOutsideClick !== undefined) {
          onOutsideClick();
        }
      } else {
        if (onInsideClick !== undefined) {
          onInsideClick();
        }
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, [element, onOutsideClick, onInsideClick]);
};

export default useOutsideClick;
