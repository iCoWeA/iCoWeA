import { useRef, useEffect } from 'react';

const useWindowScroll = (handler?: ((this: any, ev: Event) => any) | false | null, options?: boolean | AddEventListenerOptions): void => {
  const savedHandler = useRef(handler);

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    if (!savedHandler.current) {
      return;
    }

    const eventHandler = (event: Event): void => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    document.addEventListener('scroll', eventHandler, options);

    return () => document.removeEventListener('scroll', eventHandler, options);
  }, [!handler, options]);
};

export default useWindowScroll;
