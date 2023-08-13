import { useRef, useState, useEffect, useCallback } from 'react';

const initialTimerId = -1;

interface Config {
  open?: boolean;
  showDelay?: number;
  hideDelay?: number;
  hideDuration?: number;
  onOpen?: () => void;
  onClose?: () => void;
}

interface Return {
  isMounted: boolean;
  isOpen: boolean;
  show: () => void;
  hide: () => void;
  unmount: () => void;
}

const useMount = ({ open, showDelay, hideDelay, hideDuration, onOpen, onClose }: Config = {}): Return => {
  const timerId = useRef(initialTimerId);
  const [isMounted, setIsMounted] = useState(open ?? false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isMounted) {
      timerId.current = window.setTimeout(() => {
        setIsOpen(true);

        if (onOpen !== undefined) {
          onOpen();
        }
      }, showDelay ?? 0);
    }
  }, [isMounted]);

  const show = useCallback(() => {
    clearTimeout(timerId.current);

    if (isMounted) {
      timerId.current = window.setTimeout(() => {
        setIsOpen(true);

        if (onOpen !== undefined) {
          onOpen();
        }
      }, showDelay ?? 0);
    } else {
      setIsMounted(true);
    }
  }, [isMounted]);

  const hide = useCallback(() => {
    clearTimeout(timerId.current);

    timerId.current = window.setTimeout(() => {
      timerId.current = window.setTimeout(() => {
        setIsMounted(false);
      }, hideDuration ?? 0);

      setIsOpen(false);

      if (onClose !== undefined) {
        onClose();
      }
    }, hideDelay ?? 0);
  }, []);

  const unmount = useCallback(() => {
    clearTimeout(timerId.current);
    setIsOpen(false);
    setIsMounted(false);

    if (onClose !== undefined) {
      onClose();
    }
  }, []);

  return {
    isMounted,
    isOpen,
    show,
    hide,
    unmount
  };
};

export default useMount;
