import { type MutableRefObject, useRef, useEffect } from 'react';

const useAddEventListener = <K extends keyof HTMLElementEventMap>(ref?: MutableRefObject<HTMLElement | null>, event?: K, handler?: ((this: any, event: HTMLElementEventMap[K]) => void) | false | null, options?: boolean | AddEventListenerOptions): void => {
  const savedHandler = useRef(handler);

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    if (!ref?.current || !event || !savedHandler.current) {
      return;
    }

    const eventHandler = (event: HTMLElementEventMap[K]): void => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    ref.current.addEventListener(event, eventHandler, options);

    return () => ref.current?.removeEventListener(event, eventHandler, options);
  }, [event, !handler, options]);
};

export default useAddEventListener;
