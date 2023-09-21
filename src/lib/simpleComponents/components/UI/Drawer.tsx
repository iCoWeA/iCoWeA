import React, { forwardRef, useContext, useRef, useImperativeHandle, useEffect } from 'react';
import { createPortal } from 'react-dom';
import drawerConfig from '../../configs/drawerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';
import Slide, { type SlideProps } from './Slide';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-expanded to handler
 *
 */

export type DrawerVariants = 'plain' | 'filled';

export interface DrawerProps extends SlideProps {
  onClose?: () => void;
  variant?: DrawerVariants;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  backdrop?: boolean;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = drawerConfig.styles;
  const {
    onClose,
    open,
    direction,
    unmountOnExit,
    variant,
    lockScroll,
    closeOnAwayClick,
    closeDuration,
    backdrop,
    backdropProps,
    overlayRef,
    className,
    ...restProps
  } = {
    ...drawerConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const drawerRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => drawerRef.current, []);

  /* --- Set outside click action --- */
  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent): void => {
      const isDrawerClicked = drawerRef.current?.contains(event.target as Node) ?? false;

      if (!isDrawerClicked && onClose !== undefined) {
        onClose();
      }
    };

    if (closeOnAwayClick && open && onClose !== undefined && !backdrop) {
      document.addEventListener('click', outsideClickHandler);
    }

    return () => {
      if (closeOnAwayClick && open && onClose !== undefined && !backdrop) {
        document.removeEventListener('click', outsideClickHandler);
      }
    };
  }, [onClose, closeOnAwayClick, open, backdrop]);

  /* --- Set timer action --- */
  useEffect(() => {
    let timerId: number;

    if (open && closeDuration !== undefined && onClose !== undefined) {
      timerId = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    return () => {
      if (open && closeDuration !== undefined && onClose !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [open, closeDuration, onClose]);

  /* --- Set lock scroll action --- */
  useEffect(() => {
    if (lockScroll && open) {
      document.body.style.overflow = 'hidden';
    }

    if (lockScroll && !open) {
      document.body.style.overflow = 'auto';
    }
  }, [lockScroll, open]);

  /* --- Set backdrop --- */
  const backdropNode = (
    <Backdrop
      onClose={onClose}
      open={open}
      unmountOnExit={unmountOnExit}
      {...backdropProps}
    />
  );

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], styles.directions[direction], className);

  const node = (
    <>
      {backdropNode}
      <Slide
        open={open}
        direction={direction}
        unmountOnExit={unmountOnExit}
        className={mergedClassName}
        ref={drawerRef}
        {...restProps}
      />
    </>
  );

  return overlayRef === undefined || overlayRef === null ? node : createPortal(node, overlayRef);
});

Drawer.displayName = 'Drawer';

export default Drawer;
