import React, { forwardRef, useRef, useImperativeHandle, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import popperConfig from '../../configs/popperConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';
import Fade, { type FadeProps } from './Fade';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-expanded to handler
 *
 */

export interface PopperProps extends FadeProps {
  onClose?: () => void;
  onResize?: () => void;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  backdrop?: boolean;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popperConfig.styles;
  const {
    onClose,
    onResize,
    onEntering,
    lockScroll,
    closeOnAwayClick,
    closeDuration,
    backdrop,
    backdropProps,
    overlayRef,
    open,
    unmountOnExit,
    className,
    ...restProps
  } = {
    ...popperConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set outside click action --- */
  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent): void => {
      const isPopperClicked = popperRef.current?.contains(event.target as Node) ?? false;

      if (!isPopperClicked && onClose !== undefined) {
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

  /* --- Set resize action --- */
  useEffect(() => {
    if (onResize !== undefined) {
      document.addEventListener('scroll', onResize);
    }

    return () => {
      if (onResize !== undefined) {
        document.removeEventListener('scroll', onResize);
      }
    };
  }, [onResize]);

  useEffect(() => {
    if (onResize !== undefined) {
      window.addEventListener('resize', onResize);
    }

    return () => {
      if (onResize !== undefined) {
        window.removeEventListener('resize', onResize);
      }
    };
  }, [onResize]);

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    backdropNode = (
      <Backdrop
        onClick={onClose}
        open={open}
        unmountOnExit={unmountOnExit}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const enteringHandler = (): void => {
    if (onResize !== undefined) {
      onResize();
    }

    if (onEntering !== undefined) {
      onEntering();
    }
  };

  const mergedClassName = mergeClasses(styles.base, className);

  const node = (
    <>
      {backdropNode}
      <Fade
        onEntering={enteringHandler}
        open={open}
        unmountOnExit={unmountOnExit}
        className={mergedClassName}
        ref={popperRef}
        {...restProps}
      />
    </>
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Popper.displayName = 'Popper';

export default Popper;
