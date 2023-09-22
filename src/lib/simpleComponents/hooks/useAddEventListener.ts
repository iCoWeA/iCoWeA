import { type MutableRefObject, useEffect } from 'react';

const useAddEventListener = (elementRef: MutableRefObject<HTMLElement | null>, event: string, handler: EventListener): void => {
  useEffect(() => {
    elementRef.current?.addEventListener(event, handler);

    return () => {
      elementRef.current?.removeEventListener(event, handler);
    };
  }, [event, handler]);
};

export default useAddEventListener;
