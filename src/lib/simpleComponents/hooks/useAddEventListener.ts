import { type MutableRefObject, useEffect } from 'react';

const useAddEventListener = <K extends keyof HTMLElementEventMap>(elementRef: MutableRefObject<HTMLElement | null>, event: K, handler?: ((event: HTMLElementEventMap[K]) => void) | null): void => {
  useEffect(() => {
    if (handler === undefined || handler === null) {
      return;
    }

    elementRef.current?.addEventListener(event, handler);

    return () => {
      elementRef.current?.removeEventListener(event, handler);
    };
  }, [event, handler]);
};

export default useAddEventListener;
