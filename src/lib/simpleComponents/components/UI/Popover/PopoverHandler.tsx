import { type MouseEvent, forwardRef, type ReactElement, cloneElement, type Dispatch, type SetStateAction } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';

interface PopoverHandlerProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  open?: boolean;
  transitionState: TransitionState;
  children: ReactElement;
}

const PopoverHandler = forwardRef<HTMLElement, PopoverHandlerProps>(({ setIsOpen, open, transitionState, children }, ref) => {
  /* --- Set props --- */
  const onClick = (event: MouseEvent<HTMLElement>): void => {
    if (open === undefined && transitionState.enter) {
      setIsOpen(false);
    }

    if (open === undefined && transitionState.exit) {
      setIsOpen(true);
    }

    if (children.props.onClick !== undefined) {
      children.props.onClick(event);
    }
  };

  return cloneElement(children, { onClick, ref });
});

PopoverHandler.displayName = 'PopoverHandler';

export default PopoverHandler;
