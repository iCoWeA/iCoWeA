import { type MutableRefObject, useEffect } from 'react';

const useClickAway = (onClose?: (() => void) | null, ...elements: Array<MutableRefObject<HTMLElement | null> | undefined>): void => {
  useEffect(() => {
    if (onClose === undefined || onClose === null) {
      return;
    }

    const clickHandler = (event: MouseEvent): void => {
      if (elements.every((element) => !(element?.current?.contains(event.target as Node) ?? false))) {
        onClose();
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.addEventListener('click', clickHandler);
    };
  }, [onClose, ...elements]);
};

export default useClickAway;
