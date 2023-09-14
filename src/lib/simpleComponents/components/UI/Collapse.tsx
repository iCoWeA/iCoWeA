import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import collapseConfig from '../../configs/collapseConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import { setStyles, mergeClasses } from '../../utils/propsHelper';

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  direction?: Orientations;
  open?: boolean;
  fit?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  keepMounted?: boolean;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = collapseConfig.styles;
  const { onClose, onEnter, onExit, direction, open, fit, closeOnAwayClick, closeDuration, keepMounted, style, className, ...restProps } = {
    ...collapseConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const collapseRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(collapseRef.current, open, onEnter, onExit);

  /*
   * Set imperative handler
   */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => collapseRef.current, [
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
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isSnackbarClicked = collapseRef.current?.contains(event.target as Node) ?? false;

    if (!isSnackbarClicked && onClose !== undefined) {
      onClose();
    }
  }, []);

  useOutsideClick(outsideClickHandler, closeOnAwayClick && animationState.enter && onClose !== undefined);

  /*
   * Set timer action
   */
  useEffect(() => {
    let timerId: number;

    if (animationState.enter && closeDuration !== undefined && onClose !== undefined) {
      timerId = window.setTimeout(() => {
        onClose();
      }, closeDuration);
    }

    return () => {
      if (animationState.enter && closeDuration !== undefined && onClose !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [animationState.enter, closeDuration]);

  /*
   * Set styles
   */
  useEffect(() => {
    if (animationState.current === AnimationStates.ENTERING && direction === 'vertical' && collapseRef.current !== null) {
      setStyles<HTMLDivElement>(collapseRef.current, {
        height: `${collapseRef.current.scrollHeight}px`,
        ...style
      });
    }

    if (animationState.current === AnimationStates.EXITING && direction === 'vertical' && collapseRef.current !== null) {
      setStyles<HTMLDivElement>(collapseRef.current, { height: '0px', ...style });
    }

    if (animationState.current === AnimationStates.ENTERING && direction === 'horizontal' && collapseRef.current !== null) {
      setStyles<HTMLDivElement>(collapseRef.current, {
        width: `${fit ? `${collapseRef.current.scrollWidth}px` : '100%'}`,
        ...style
      });
    }

    if (animationState.current === AnimationStates.EXITING && direction === 'horizontal' && collapseRef.current !== null) {
      setStyles<HTMLDivElement>(collapseRef.current, { width: '0px', ...style });
    }
  }, [animationState.current, fit, style]);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.directions[direction], className);

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={collapseRef}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;

/* ON_CLOSE() IS NOT IN DEPENDENCY LIST !!! */
