import { type MutableRefObject, useEffect } from 'react';

const useAddEventListener = <K extends keyof HTMLElementEventMap>(elementRef: MutableRefObject<HTMLElement | null>, event: K, handler: (event: HTMLElementEventMap[K]) => void): void => {
  useEffect(() => {
    elementRef.current?.addEventListener(event, handler);

    return () => {
      elementRef.current?.removeEventListener(event, handler);
    };
  }, [event, handler]);
};

export default useAddEventListener;
