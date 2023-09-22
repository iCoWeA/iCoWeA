import React, { forwardRef, useRef, useImperativeHandle, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import popperConfig from '../../configs/popperConfig';
import useClickAway from '../../hooks/useClickAway';
import useLockScroll from '../../hooks/useLockScroll';
import useResize from '../../hooks/useResize';
import useScroll from '../../hooks/useScroll';
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
    onEnter,
    onExiting,
    onExit,
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
  const isExited = useRef(true);
  const timer = useRef(-1);

  /* --- Set imperative ref --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set outside click action --- */
  useClickAway(open && closeOnAwayClick && onClose !== undefined && !backdrop ? onClose : null, popperRef);

  /* --- Set lock scroll action --- */
  useLockScroll(lockScroll && open);

  /* --- Set resize action --- */
  useResize(!isExited.current && onResize !== undefined ? onResize : null);
  useScroll(!isExited.current && onResize !== undefined ? onResize : null);

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
    isExited.current = false;

    if (onResize !== undefined) {
      onResize();
    }

    if (onEntering !== undefined) {
      onEntering();
    }
  };

  const enterHandler = (): void => {
    if (closeDuration !== undefined && onClose !== undefined) {
      timer.current = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    if (onEnter !== undefined) {
      onEnter();
    }
  };

  const exitingHandler = (): void => {
    clearTimeout(timer.current);

    if (onExiting !== undefined) {
      onExiting();
    }
  };

  const exitHandler = (): void => {
    isExited.current = true;

    if (lockScroll && !open) {
      document.body.style.overflow = 'auto';
    }

    if (onExit !== undefined) {
      onExit();
    }
  };

  const mergedClassName = mergeClasses(styles.base, className);

  const node = (
    <>
      {backdropNode}
      <Fade
        onEntering={enteringHandler}
        onEnter={enterHandler}
        onExit={exitHandler}
        onExiting={exitingHandler}
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
