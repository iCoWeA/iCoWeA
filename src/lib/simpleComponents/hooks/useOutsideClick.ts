import { useEffect } from 'react';

const useOutsideClick = (onOutsideClick: (event: MouseEvent) => void, enable: boolean = true): void => {
  useEffect(() => {
    if (enable) {
      document.addEventListener('click', onOutsideClick);
    }

    return () => {
      if (enable) {
        document.removeEventListener('click', onOutsideClick);
      }
    };
  }, [onOutsideClick, enable]);
};

export default useOutsideClick;
