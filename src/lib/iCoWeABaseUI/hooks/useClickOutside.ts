import { type MutableRefObject, useRef, useEffect } from 'react';

const useClickOutside = (handler?: VoidFunction | false | null, ...elements: Array<MutableRefObject<HTMLElement | null> | undefined>): void => {
  const savedHandler = useRef(handler);

  useEffect(() => { savedHandler.current = handler; }, [handler]);

  useEffect(() => {
    if (!savedHandler.current) {
      return;
    }

    const eventHandler = (event: MouseEvent): void => {
      if (elements.every((element) => !(element?.current?.contains(event.target as Node) ?? false)) && savedHandler.current) {
        savedHandler.current();
      }
    };

    document.addEventListener('click', eventHandler);

    return () => document.removeEventListener('click', eventHandler);
  }, [!handler]);
};

export default useClickOutside;
