import React, { forwardRef } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

interface DrawerBackdropProps extends BackdropProps {
  transitionState: TransitionState;
  enterDuration: number;
  exitDuration: number;
  open: boolean;
}

const DrawerBackdrop = forwardRef<HTMLDivElement, DrawerBackdropProps>(({ transitionState, enterDuration, exitDuration, open, style, ...restProps }, ref) => {
  /* --- Set props --- */
  const mergedStyle = {
    transitionDuration: `${transitionState.entering ? enterDuration : exitDuration}ms`,
    ...style
  };

  return (
    <Backdrop
      open={open}
      style={mergedStyle}
      ref={ref}
      {...restProps}
    />
  );
});

DrawerBackdrop.displayName = 'DrawerBackdrop';

export default DrawerBackdrop;
