import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback, type ReactNode, type TransitionEvent } from 'react';
import { createPortal } from 'react-dom';
import popperConfig from '../../configs/popperConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import useScroll from '../../hooks/useScroll';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-expanded to handler
 *
 */

export interface PopperProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  onResize?: () => void;
  open?: boolean;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  keepMounted?: boolean;
  backdrop?: boolean;
  anchorElement?: HTMLElement | null;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popperConfig.styles;
  const {
    onClose,
    onEnter,
    onExit,
    onEntering,
    onExiting,
    onResize,
    onTransitionEnd,
    open,
    lockScroll,
    closeOnAwayClick,
    closeDuration,
    keepMounted,
    backdrop,
    anchorElement,
    backdropProps,
    overlayRef,
    style,
    className,
    ...restProps
  } = {
    ...popperConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const { state: animationState, enter, exit, endAnimation } = useAnimation<HTMLDivElement>(popperRef.current, open, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, [
    !keepMounted && !open && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && animationState.exit) {
      enter(onEntering);
    }

    if (!open && animationState.enter) {
      exit(onExiting);
    }
  }, [open, animationState.enter, animationState.exit]);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback(
    (event: MouseEvent) => {
      const isPopperClicked = popperRef.current?.contains(event.target as Node) ?? false;
      const isAnchorClicked = anchorElement?.contains(event.target as Node) ?? false;

      if (!isPopperClicked && !isAnchorClicked && onClose !== undefined) {
        onClose();
      }
    },
    [anchorElement, onClose]
  );

  useOutsideClick(outsideClickHandler, closeOnAwayClick && animationState.enter && onClose !== undefined && !backdrop);

  /* --- Set timer action --- */
  useEffect(() => {
    let timerId: number;

    if (animationState.current === AnimationStates.ENTERED && closeDuration !== undefined && onClose !== undefined) {
      timerId = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    return () => {
      if (animationState.current === AnimationStates.ENTERED && closeDuration !== undefined && onClose !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [animationState.current, closeDuration, onClose]);

  /* --- Set lock scroll action --- */
  useEffect(() => {
    if (lockScroll) {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [lockScroll, open]);

  /* --- Set resize action --- */
  useScroll(onResize, animationState.current !== AnimationStates.EXITED);

  useResize(onResize, animationState.current !== AnimationStates.EXITED);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    backdropNode = (
      <Backdrop
        onClick={onClose}
        open={open}
        keepMounted={keepMounted}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (event.target === popperRef.current) {
      endAnimation(onEnter, onExit);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  if (onResize !== undefined && animationState.current !== AnimationStates.EXITED) {
    onResize();
  }

  const mergedClassName = mergeClasses(
    styles.base,
    animationState.enter && styles.open,
    animationState.current === AnimationStates.EXITED && !open && styles.hide,
    className
  );

  const node = (
    <>
      {backdropNode}
      <div
        onTransitionEnd={transitionEndHandler}
        className={mergedClassName}
        ref={popperRef}
        {...restProps}
      />
    </>
  );

  return overlayRef === undefined || overlayRef === null ? node : createPortal(node, overlayRef);
});

Popper.displayName = 'Popper';

export default Popper;
