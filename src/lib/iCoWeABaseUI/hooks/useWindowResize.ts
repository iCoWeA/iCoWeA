import { useRef, useEffect } from 'react';

const useWindowResize = (handler?: ((this: any, ev: UIEvent) => any) | false | null, options?: boolean | AddEventListenerOptions): void => {
  const savedHandler = useRef(handler);

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    if (!savedHandler.current) {
      return;
    }

    const eventHandler = (event: UIEvent): void => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    window.addEventListener('resize', eventHandler, options);

    return () => window.removeEventListener('resize', eventHandler, options);
  }, [!handler, options]);
};

export default useWindowResize;
