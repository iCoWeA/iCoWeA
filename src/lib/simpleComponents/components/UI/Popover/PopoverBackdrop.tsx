import React, { type Dispatch, type SetStateAction, forwardRef } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

interface PopoverBackdropProps extends BackdropProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  transitionState: TransitionState;
  enterDuration: number;
  exitDuration: number;
}

const PopoverBackdrop = forwardRef<HTMLDivElement, PopoverBackdropProps>(
  ({ setIsOpen, transitionState, enterDuration, exitDuration, onClose, open, style, ...restProps }, ref) => {
    /* --- Set props --- */
    let closeHandler = onClose;

    if (open === undefined) {
      closeHandler = () => {
        setIsOpen(false);

        if (onClose !== undefined) {
          onClose();
        }
      };
    }

    const mergedStyle = {
      transitionDuration: `${transitionState.entering ? enterDuration : exitDuration}ms`,
      ...style
    };

    return (
      <Backdrop
        onClose={closeHandler}
        open={transitionState.entering}
        style={mergedStyle}
        ref={ref}
        {...restProps}
      />
    );
  }
);

PopoverBackdrop.displayName = 'PopoverBackdrop';

export default PopoverBackdrop;
