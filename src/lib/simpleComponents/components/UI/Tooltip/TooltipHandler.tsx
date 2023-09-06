import { type Dispatch, type SetStateAction, type ReactElement, forwardRef, cloneElement, type MouseEvent } from 'react';

interface TooltipHandlerProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setCursorY: Dispatch<React.SetStateAction<number>>;
  setCursorX: Dispatch<React.SetStateAction<number>>;
  isControlled: boolean;
  isAnimationEnter: boolean;
  followCursor: boolean;
  children: ReactElement;
}

const TooltipHandler = forwardRef<HTMLElement, TooltipHandlerProps>(
  ({ setIsOpen, setCursorY, setCursorX, isControlled, isAnimationEnter, followCursor, children }, ref) => {
    /* --- Set props --- */
    const onMouseEnter = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (!isControlled && !isAnimationEnter) {
        setIsOpen(true);
      }

      if (children.props.onMouseEnter !== undefined) {
        children.props.onMouseEnter(event);
      }
    };

    const onMouseLeave = (event: MouseEvent<HTMLElement>): void => {
      if (!isControlled && isAnimationEnter) {
        setIsOpen(false);
      }

      if (children.props.onMouseLeave !== undefined) {
        children.props.onMouseLeave(event);
      }
    };

    const onMouseMove = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (children.props.onMouseMove !== undefined) {
        children.props.onMouseMove(event);
      }
    };

    return cloneElement(children, { onMouseEnter, onMouseLeave, onMouseMove, ref });
  }
);

TooltipHandler.displayName = 'TooltipHandler';

export default TooltipHandler;
