import React, { forwardRef, useRef, useState, useImperativeHandle, useEffect, type ReactNode } from 'react';
import snackbarConfig from '../../configs/snackbarConfig';
import usePrevious from '../../hooks/usePrevious';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';
import Popper, { type PopperProps } from './Popper';

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

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);
  const isControlled = open !== undefined;

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    const closeHandler = (): void => {
      if (isControlled && onClose !== undefined) {
        onClose();
      }

      if (!isControlled) {
        setIsOpen(false);
      }
    };

    backdropNode = (
      <Backdrop
        onClose={closeHandler}
        open={open ?? isOpen}
        keepMounted={keepMounted}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const closeHandler = (): void => {
    if (isControlled && onClose !== undefined) {
      onClose();
    }

    if (!isControlled) {
      setIsOpen(false);
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.positions[position], className);

  return (
    <>
      {backdropNode}
      <Popper
        onClose={closeHandler}
        open={open ?? isOpen}
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
