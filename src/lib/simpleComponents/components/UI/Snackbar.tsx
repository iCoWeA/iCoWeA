import React, { forwardRef, useRef, useImperativeHandle, type ReactNode } from 'react';
import snackbarConfig from '../../configs/snackbarConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';
import Popper, { type PopperProps } from './Popper';

/* ARIA
 *
 * Set aria-labeledby to title
 * Set aria-describedby to content
 *
 */

export interface SnackbarProps extends PopperProps {
  onClose?: () => void;
  open?: boolean;
  position?: InnerPositions;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  keepMounted?: boolean;
  backdrop?: boolean;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = snackbarConfig.styles;
  const { onClose, open, position, lockScroll, closeOnAwayClick, closeDuration, keepMounted, backdrop, backdropProps, overlayRef, className, ...restProps } = {
    ...snackbarConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement | null>(null);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    backdropNode = (
      <Backdrop
        onClose={onClose}
        open={open}
        keepMounted={keepMounted}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.positions[position], className);

  return (
    <>
      {backdropNode}
      <Popper
        onClose={onClose}
        open={open}
        lockScroll={lockScroll}
        closeOnAwayClick={backdrop ? false : closeOnAwayClick}
        closeDuration={closeDuration}
        keepMounted={keepMounted}
        overlayRef={overlayRef}
        className={mergedClassName}
        ref={popperRef}
        {...restProps}
      />
    </>
  );
});

Snackbar.displayName = 'Snackbar';

export default Snackbar;
