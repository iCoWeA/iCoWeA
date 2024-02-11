import {
  type MutableRefObject,
  type RefObject,
  type ReactElement,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  cloneElement
} from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import { cloneRef } from '../../../utils/utils';

export type TooltipAnchorProps = {
  setState?: ((state: boolean) => void) | ((state?: boolean) => void);
  resizeHandler: VoidFunction;
  keepOnHover: boolean;
  followCursor: boolean;
  open?: boolean;
  isOpen: boolean;
  cursor: MutableRefObject<CursorPosition>;
  rootRef: RefObject<HTMLDivElement>;
  children: ReactElement;
};

const TooltipAnchor = forwardRef<HTMLElement, TooltipAnchorProps>(
  (
    { setState, resizeHandler, keepOnHover, followCursor, open, isOpen, cursor, rootRef, children },
    forwardedRef
  ) => {
    const ref = useRef<HTMLElement>(null);

    useImperativeHandle<HTMLElement | null, HTMLElement | null>(
      forwardedRef,
      () => ref.current,
      []
    );

    /* --- Set event handlers --- */
    const isControlled = open !== undefined;

    const enterHandler = useCallback(
      (event: MouseEvent): void => {
        if (setState !== undefined) {
          setState(true);
        }

        cursor.current.x = event.clientX;
        cursor.current.y = event.clientY;
      },
      [setState]
    );

    const moveHandler = useCallback(
      (event: MouseEvent): void => {
        cursor.current.x = event.clientX;
        cursor.current.y = event.clientY;

        resizeHandler();
      },
      [resizeHandler]
    );

    const leaveHandler = useCallback((): void => {
      if (setState !== undefined) {
        setState(false);
      }
    }, [setState]);

    const keepLeaveHandler = useCallback(
      (event: MouseEvent): void => {
        if (
          !(rootRef.current?.contains(event.relatedTarget as Node) ?? false) &&
          setState !== undefined
        ) {
          setState(false);
        }
      },
      [setState]
    );

    useAddEventListener(ref, 'mouseenter', !isControlled && !isOpen && enterHandler);

    useAddEventListener(ref, 'mousemove', followCursor && (open ?? isOpen) && moveHandler);

    useAddEventListener(ref, 'mouseleave', !keepOnHover && !isControlled && isOpen && leaveHandler);

    useAddEventListener(ref, 'mouseleave', keepOnHover && (open ?? isOpen) && keepLeaveHandler);

    return cloneElement(children, { ref: cloneRef(children, ref) });
  }
);

TooltipAnchor.displayName = 'TooltipAnchor';

export default TooltipAnchor;
