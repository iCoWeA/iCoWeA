import React, { forwardRef } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';
import dialogConfig from '../../../configs/dialogConfig';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';
import { mergeClasses } from '../../../utils/propsHelper';

interface DialogBackdropProps extends BackdropProps {
  transitionState: TransitionState;
  enterDuration: number;
  exitDuration: number;
}

const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(
  ({ transitionState, enterDuration, exitDuration, style, className, ...restProps }, ref) => {
    /* --- Set default props --- */
    const styles = dialogConfig.styles.backdrop;

    /* --- Set props --- */
    const mergedStyle = {
      transitionDuration: `${transitionState.entering ? enterDuration : exitDuration}ms`,
      ...style
    };

    const mergedClassName = mergeClasses(styles.base, className);

    return (
      <Backdrop
        open={transitionState.entering}
        style={mergedStyle}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

DialogBackdrop.displayName = 'DialogBackdrop';

export default DialogBackdrop;
