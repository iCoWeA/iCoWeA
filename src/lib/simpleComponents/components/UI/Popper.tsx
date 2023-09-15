import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import popperConfig from '../../configs/popperConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import useScroll from '../../hooks/useScroll';
import { setElementPosition } from '../../utils/positiontHelper';
import { setStyles, mergeClasses } from '../../utils/propsHelper';

export interface PopperProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  position?: OuterPositions;
  offset?: number;
  responsive?: boolean;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  keepMounted?: boolean;
  anchorElement?: HTMLElement | null;
  overlayRef?: Element | null;
}

const Popper = forwardRef<HTMLDivElement, PopperProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popperConfig.styles;
  const {
    onClose,
    onEnter,
    onExit,
    open,
    position,
    offset,
    responsive,
    lockScroll,
    closeOnAwayClick,
    closeDuration,
    keepMounted,
    anchorElement,
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
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(popperRef.current, open, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, [
    !keepMounted && !open && animationState.current === AnimationStates.EXITED
  ]);

  /*
   * Set open state
   */
  useEffect(() => {
    if (open && animationState.exit) {
      enter();
    }

    if (!open && animationState.enter) {
      exit();
    }
  }, [open, animationState.enter, animationState.exit]);

  /*
   * Set outside click action
   */
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

  useOutsideClick(outsideClickHandler, closeOnAwayClick && animationState.enter && onClose !== undefined);

  /*
   * Set timer action
   */
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

  /*
   * Set lock scroll action
   */
  useEffect(() => {
    if (lockScroll) {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [lockScroll, open]);

  /*
   * Set resize action
   */
  const setPosition = useCallback((): void => {
    setElementPosition(
      popperRef.current,
      position,
      anchorElement?.offsetTop,
      anchorElement?.offsetLeft,
      anchorElement?.offsetHeight,
      anchorElement?.offsetWidth,
      offset,
      responsive
    );
  }, [position, anchorElement, offset, responsive]);

  useScroll(setPosition, responsive && animationState.current !== AnimationStates.EXITED);

  useResize(setPosition, responsive && animationState.current !== AnimationStates.EXITED);

  useEffect(() => {
    if (animationState.current !== AnimationStates.EXITED) {
      setPosition();
    }
  }, [animationState.current, setPosition]);

  /*
   * Set styles
   */
  useEffect(() => {
    if (animationState.current === AnimationStates.ENTERING) {
      setStyles<HTMLDivElement>(popperRef.current, { opacity: '100', ...style });
    }

    if (animationState.current === AnimationStates.EXITING) {
      setStyles<HTMLDivElement>(popperRef.current, { opacity: '0', ...style });
    }
  }, [animationState.current, style]);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  const node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={popperRef}
      {...restProps}
    />
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Popper.displayName = 'Popper';

export default Popper;
