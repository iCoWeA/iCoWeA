import { type MutableRefObject, useEffect } from 'react';

import { getFocusableElements } from '../utils/utils';

const useFocusTrap = (ref?: MutableRefObject<HTMLElement | null>, enable?: boolean): void => {
  useEffect(() => {
    if (!ref?.current || !enable) {
      return;
    }

    const handleWindowBlur = (event: FocusEvent): void => {
      if (!ref.current?.contains(event.relatedTarget as Node)) {
        const focusableElements = getFocusableElements(ref.current as HTMLElement);

        if (event.target === focusableElements[0]) {
          focusableElements[focusableElements.length - 1].focus();
        }

        if (event.target === focusableElements[focusableElements.length - 1]) {
          focusableElements[0].focus();
        }
      }
    };

    document.addEventListener('blur', handleWindowBlur, true);

    return () => document.removeEventListener('blur', handleWindowBlur, true);
  }, [enable]);
};

export default useFocusTrap;
