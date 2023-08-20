import { useEffect } from 'react';

const useOutsideClick = (element?: HTMLElement | null, onOutsideClick?: () => void, enable: boolean = true): void => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent): void => {
      if (element === undefined || element === null || !element.contains(event.target as Node)) {
        if (onOutsideClick !== undefined) {
          onOutsideClick();
        }
      }
    };

    if (enable) {
      document.addEventListener('click', clickHandler);
    }

    return () => {
      if (enable) {
        document.removeEventListener('click', clickHandler);
      }
    };
  }, [element, onOutsideClick, enable]);
};

export default useOutsideClick;
