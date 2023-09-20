import React, { forwardRef } from 'react';
import snackbarConfig from '../../configs/snackbarConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps, type PopperVariants } from './Popper';

/* ARIA
 *
 * Set aria-labeledby to title
 * Set aria-describedby to content
 *
 */

export interface SnackbarProps extends PopperProps {
  onClose?: () => void;
  variant?: PopperVariants;
  open?: boolean;
  position?: InnerPositions;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  keepMounted?: boolean;
  backdrop?: boolean;
  overlayRef?: Element | null;
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = snackbarConfig.styles;
  const { onClose, variant, open, position, lockScroll, closeOnAwayClick, closeDuration, keepMounted, backdrop, overlayRef, className, ...restProps } = {
    ...snackbarConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.positions[position], className);

  return (
    <Popper
      onClose={onClose}
      variant={variant}
      open={open}
      lockScroll={lockScroll}
      closeOnAwayClick={closeOnAwayClick}
      closeDuration={closeDuration}
      keepMounted={keepMounted}
      backdrop={backdrop}
      overlayRef={overlayRef}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Snackbar.displayName = 'Snackbar';

export default Snackbar;
