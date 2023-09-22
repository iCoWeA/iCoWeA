import React, { forwardRef, useContext, useRef, useImperativeHandle, useEffect, type ReactNode } from 'react';
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
    onExit,
    variant,
    lockScroll,
    closeOnAwayClick,
    closeDuration,
    backdrop,
    backdropProps,
    overlayRef,
    open,
    direction,
    unmountOnExit,
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
  }, [lockScroll, open]);

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    backdropNode = (
      <Backdrop
        onClick={onClose}
        open={open}
        unmountOnExit={unmountOnExit}
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const exitHandler = (): void => {
    if (lockScroll && !open) {
      document.body.style.overflow = 'auto';
    }

    if (onExit !== undefined) {
      onExit();
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], styles.directions[direction], className);

  const node = (
    <>
      {backdropNode}
      <Slide
        onExit={exitHandler}
        open={open}
        direction={direction}
        unmountOnExit={unmountOnExit}
        className={mergedClassName}
        ref={drawerRef}
        {...restProps}
      />
    </>
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Drawer.displayName = 'Drawer';

export default Drawer;
