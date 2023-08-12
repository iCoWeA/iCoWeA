import { useCallback, useEffect, useRef, useState } from 'react';

interface Return {
  isMounted: boolean;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
}

const initialTimerId = -1;

const useMount = (open: boolean = false): Return => {
  const timerId = useRef(initialTimerId);
  const [isMounted, setIsMounted] = useState(open);
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => {
    clearTimeout(timerId.current);
    timerId.current = initialTimerId;

    if (isMounted) {
      setIsOpen(true);
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  const hide = useCallback(() => {
    setIsOpen(false);
    timerId.current = window.setTimeout(() => {
      setIsMounted(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setIsOpen(true);
    }
  }, [isMounted]);

  return {
    isMounted,
    isOpen,
    show,
    hide
  };
};

export default useMount;
