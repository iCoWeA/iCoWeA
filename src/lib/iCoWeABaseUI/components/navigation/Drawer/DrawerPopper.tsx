import React, { type MutableRefObject, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import drawerConfig from './drawerConfig';

export type DrawerPopperDefaultProps = PopperProps & {
  color?: DefaultColors;
};

export type DrawerPopperProps = DrawerPopperDefaultProps & {
  placement: Placements;
  closeOnEscape: boolean;
  focusTrap: boolean;
  smooth: boolean;
  backdrop: Backdrop;
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
};

const DrawePopper = forwardRef<HTMLDivElement, DrawerPopperProps>(
  ({ placement, backdrop, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = drawerConfig.styles.root;

      return mergeClasses(styles.base, styles.placements[placement], className);
    }, [placement, className]);

    return (
      <Popper
        lockScroll
        closeOnOutsideClick={backdrop === 'none'}
        closeDuration={-1}
        closeOnBackdropClick
        backdrop={backdrop}
        transition={`slide-${placement}`}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

DrawePopper.displayName = 'DrawerPopper';

export default DrawePopper;
