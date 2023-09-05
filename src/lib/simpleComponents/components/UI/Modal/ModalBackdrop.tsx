import React, { forwardRef } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';
import modalConfig from '../../../configs/modalConfig';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';
import { mergeClasses } from '../../../utils/propsHelper';

interface DrawerBackdropProps extends BackdropProps {
  transitionState: TransitionState;
  enterDuration: number;
  exitDuration: number;
}

const DrawerBackdrop = forwardRef<HTMLDivElement, DrawerBackdropProps>(
  ({ transitionState, enterDuration, exitDuration, style, className, ...restProps }, ref) => {
    /* --- Set default props --- */
    const styles = modalConfig.styles.backdrop;

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

DrawerBackdrop.displayName = 'DrawerBackdrop';

export default DrawerBackdrop;
