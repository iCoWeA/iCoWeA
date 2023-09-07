import { useEffect } from 'react';

const useFocusin = (onFocusin: (event: FocusEvent) => void, enable: boolean = true): void => {
  useEffect(() => {
    if (enable) {
      document.addEventListener('focusin', onFocusin);
    }

    return () => {
      if (enable) {
        document.removeEventListener('focusin', onFocusin);
      }
    };
  }, [onFocusin, enable]);
};

export default useFocusin;
