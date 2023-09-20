import React, { forwardRef, useContext } from 'react';
import snackbarConfig from '../../configs/snackbarConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps } from './Popper';

/* ARIA
 *
 * Set aria-labeledby to title
 * Set aria-describedby to content
 *
 */
export type SnackbarVariants = 'plain' | 'filled' | 'outlined';

export interface SnackbarProps extends PopperProps {
  onClose?: () => void;
  variant?: SnackbarVariants;
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
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = snackbarConfig.styles;
  const { onClose, variant, open, position, lockScroll, closeOnAwayClick, closeDuration, keepMounted, backdrop, overlayRef, className, ...restProps } = {
    ...snackbarConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    variant !== undefined && styles.empty,
    variant !== undefined && styles.variants[variant][theme],
    className
  );

  return (
    <Popper
      onClose={onClose}
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
