import { useRef, useEffect } from 'react';

const useKeyboard = (key: string, handler?: VoidFunction | false | null, options?: boolean | AddEventListenerOptions): void => {
  const savedHandler = useRef(handler);

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    if (!savedHandler.current) {
      return;
    }

    const eventHandler = (event: KeyboardEvent): void => {
      if (event.key === key && savedHandler.current) {
        savedHandler.current();
      }
    };

    document.addEventListener('keydown', eventHandler, options);

    return () => document.removeEventListener('keydown', eventHandler, options);
  }, [key, !handler, options]);
};

export default useKeyboard;
