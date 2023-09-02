import { type MouseEvent, forwardRef, type ReactElement, cloneElement } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';

interface PopoverHandlerProps {
  enter: () => void;
  exit: () => void;
  open?: boolean;
  transitionState: TransitionState;
  children: ReactElement;
}

const PopoverHandler = forwardRef<HTMLElement, PopoverHandlerProps>(({ enter, exit, open, transitionState, children }, ref) => {
  /* --- Set props --- */
  const onClick = (event: MouseEvent<HTMLElement>): void => {
    if (open === undefined && transitionState.enter) {
      exit();
    }

    if (open === undefined && transitionState.exit) {
      enter();
    }

    if (children.props.onClick !== undefined) {
      children.props.onClick(event);
    }
  };

  return cloneElement(children, { onClick, ref });
});

PopoverHandler.displayName = 'PopoverHandler';

export default PopoverHandler;
