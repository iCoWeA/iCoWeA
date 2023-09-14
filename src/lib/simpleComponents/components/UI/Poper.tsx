import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import poperConfig from '../../configs/poperConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import useResize from '../../hooks/useResize';
import useScroll from '../../hooks/useScroll';
import { setElementPosition } from '../../utils/positiontHelper';
import { setStyles, mergeClasses } from '../../utils/propsHelper';

export interface PoperProps extends BaseHTMLAttributes<HTMLDivElement> {
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
}

const Poper = forwardRef<HTMLDivElement, PoperProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = poperConfig.styles;
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
    style,
    className,
    children,
    ...restProps
  } = {
    ...poperConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const poperRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(poperRef.current, open, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => poperRef.current, [
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
      const isPoperClicked = poperRef.current?.contains(event.target as Node) ?? false;
      const isAnchorClicked = anchorElement?.contains(event.target as Node) ?? false;

      if (!isPoperClicked && !isAnchorClicked && onClose !== undefined) {
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
      poperRef.current,
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
      setStyles<HTMLDivElement>(poperRef.current, { opacity: '100', ...style });
    }

    if (animationState.current === AnimationStates.EXITING) {
      setStyles<HTMLDivElement>(poperRef.current, { opacity: '0', ...style });
    }
  }, [animationState.current, style]);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={poperRef}
      {...restProps}
    >
      {children}
    </div>
  );
});

Poper.displayName = 'Poper';

export default Poper;
