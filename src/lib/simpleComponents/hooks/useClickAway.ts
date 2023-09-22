import { useEffect } from 'react';

const useClickAway = (onClose: (() => void) | null, ...elements: Array<HTMLElement | null>): void => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent): void => {
      if (onClose === null) {
        return;
      }

      if (elements.every((element) => !(element?.contains(event.target as Node) ?? false))) {
        onClose();
      }
    };

    if (onClose !== null) {
      document.addEventListener('click', clickHandler);
    }

    return () => {
      if (onClose !== null) {
        document.addEventListener('click', clickHandler);
      }
    };
  }, [onClose, ...elements]);
};

export default useClickAway;
