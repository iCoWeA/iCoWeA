import { type Dispatch, type MouseEvent, forwardRef, type ReactElement, cloneElement } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';

interface TooltipHandlerProps {
  enter: () => void;
  exit: () => void;
  setCursorY: Dispatch<React.SetStateAction<number>>;
  setCursorX: Dispatch<React.SetStateAction<number>>;
  open?: boolean;
  transitionState: TransitionState;
  followCursor: boolean;
  children: ReactElement;
}

const TooltipHandler = forwardRef<HTMLElement, TooltipHandlerProps>(
  ({ enter, exit, setCursorY, setCursorX, open, transitionState, followCursor, children }, ref) => {
    /* --- Set props --- */
    const onMouseEnter = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (open === undefined && transitionState.exit) {
        enter();
      }

      if (children.props.onMouseEnter !== undefined) {
        children.props.onMouseEnter(event);
      }
    };

    const onMouseLeave = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (open === undefined && transitionState.enter) {
        exit();
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