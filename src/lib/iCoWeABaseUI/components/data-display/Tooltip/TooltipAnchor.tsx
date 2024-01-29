import {
  type RefObject,
  type MutableRefObject,
  type ReactElement,
  forwardRef,
  useRef,
  useImperativeHandle,
  cloneElement
} from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import { cloneRef } from '../../../utils/utils';
import { type CursorPosition } from './Tooltip';

export type TooltipAnchorProps = {
  setState?: ((state: boolean) => void) | ((state?: boolean) => void);
  resizeHandler: VoidFunction;
  open?: boolean;
  isOpen: boolean;
  keepOnHover: boolean;
  followCursor: boolean;
  rootRef: RefObject<HTMLDivElement>;
  cursor: MutableRefObject<CursorPosition>;
  children: ReactElement;
};

const TooltipAnchor = forwardRef<HTMLElement, TooltipAnchorProps>(
  (
    { setState, resizeHandler, open, isOpen, keepOnHover, followCursor, rootRef, cursor, children },
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

    const enterHandler = (event: MouseEvent): void => {
      if (setState !== undefined) {
        setState(true);
      }

      cursor.current.x = event.clientX;
      cursor.current.y = event.clientY;
    };

    const moveHandler = (event: MouseEvent): void => {
      cursor.current.x = event.clientX;
      cursor.current.y = event.clientY;

      resizeHandler();
    };

    const leaveHandler = (): void => {
      if (setState !== undefined) {
        setState(false);
      }
    };

    const keepLeaveHandler = (event: MouseEvent): void => {
      if (
        !(rootRef.current?.contains(event.relatedTarget as Node) ?? false) &&
        setState !== undefined
      ) {
        setState(false);
      }
    };

    useAddEventListener(ref, 'mouseenter', !isControlled && !isOpen && enterHandler);

    useAddEventListener(ref, 'mousemove', followCursor && (open ?? isOpen) && moveHandler);

    useAddEventListener(ref, 'mouseleave', !keepOnHover && !isControlled && isOpen && leaveHandler);

    useAddEventListener(ref, 'mouseleave', keepOnHover && (open ?? isOpen) && keepLeaveHandler);

    return cloneElement(children, { ref: cloneRef(children, ref) });
  }
);

TooltipAnchor.displayName = 'TooltipAnchor';

export default TooltipAnchor;
