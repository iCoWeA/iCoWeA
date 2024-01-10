import { useRef, useEffect } from 'react';

const useTimer = (handler?: VoidFunction | false | null, closeDuration: number = -1): void => {
  const savedHandler = useRef(handler);

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    if (closeDuration < 0 || !savedHandler.current) {
      return;
    }

    const timerId = window.setTimeout(() => {
      if (savedHandler.current) {
        savedHandler.current();
      }
    }, closeDuration);

    return () => clearTimeout(timerId);
  }, [!handler, closeDuration]);
};

export default useTimer;
