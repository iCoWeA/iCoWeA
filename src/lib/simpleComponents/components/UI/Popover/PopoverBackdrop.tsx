import React, { type Dispatch, type SetStateAction, forwardRef } from 'react';
import { type TransitionState } from '../../../hooks/useTransition';
import popoverConfig from '../../../configs/popoverConfig';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';
import { mergeClasses } from '../../../utils/propsHelper';

interface PopoverBackdropProps extends BackdropProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  transitionState: TransitionState;
  enterDuration: number;
  exitDuration: number;
}

const PopoverBackdrop = forwardRef<HTMLDivElement, PopoverBackdropProps>(
  ({ setIsOpen, transitionState, enterDuration, exitDuration, onClose, open, style, className, ...restProps }, ref) => {
    /* --- Set default props --- */
    const styles = popoverConfig.styles.popover;

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

    const mergedClassName = mergeClasses(styles.base, className);

    return (
      <Backdrop
        onClose={closeHandler}
        open={transitionState.entering}
        style={mergedStyle}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

PopoverBackdrop.displayName = 'PopoverBackdrop';

export default PopoverBackdrop;
