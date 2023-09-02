import React, { forwardRef } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

interface PopoverBackdropProps extends BackdropProps {
  exit: () => void;
  transitionState: TransitionState;
  enterDuration: number;
  exitDuration: number;
  open: boolean;
}

const PopoverBackdrop = forwardRef<HTMLDivElement, PopoverBackdropProps>(
  ({ exit, transitionState, enterDuration, exitDuration, open, onClose, style, ...restProps }, ref) => {
    /* --- Set props --- */
    let closeHandler = onClose;

    if (open === undefined) {
      closeHandler = () => {
        exit();

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
        open={open}
        style={mergedStyle}
        ref={ref}
        {...restProps}
      />
    );
  }
);

PopoverBackdrop.displayName = 'PopoverBackdrop';

export default PopoverBackdrop;
