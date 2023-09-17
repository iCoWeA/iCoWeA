import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback, type CSSProperties } from 'react';
import collapseConfig from '../../configs/collapseConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import { mergeClasses } from '../../utils/propsHelper';

export type CollapseDirections = 'horizontal' | 'horizontal-full' | 'vertical';

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  direction?: CollapseDirections;
  open?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  keepMounted?: boolean;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = collapseConfig.styles;
  const { onClose, onEnter, onExit, direction, open, closeOnAwayClick, closeDuration, keepMounted, style, className, ...restProps } = {
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
  const outsideClickHandler = useCallback(
    (event: MouseEvent) => {
      const isSnackbarClicked = collapseRef.current?.contains(event.target as Node) ?? false;

      if (!isSnackbarClicked && onClose !== undefined) {
        onClose();
      }
    },
    [onClose]
  );

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
  }, [animationState.enter, closeDuration, onClose]);

  useEffect(() => {
    if (open && direction === 'vertical' && collapseRef.current !== null) {
      collapseRef.current.style.height = 'auto';
    }

    if (open && direction === 'horizontal-full' && collapseRef.current !== null) {
      collapseRef.current.style.width = '100%';
    }

    if (open && direction === 'horizontal' && collapseRef.current !== null) {
      collapseRef.current.style.width = 'auto';
    }
  }, []);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  let mergedStyles: CSSProperties | undefined;

  if (animationState.enter && direction === 'vertical' && collapseRef.current !== null) {
    mergedStyles = {
      height: `${collapseRef.current.scrollHeight}px`,
      ...style
    };
  }

  if (animationState.exit && direction === 'vertical' && collapseRef.current !== null) {
    mergedStyles = { height: '0px', ...style };
  }

  if (animationState.enter && direction === 'horizontal-full' && collapseRef.current !== null) {
    mergedStyles = {
      width: '100%',
      ...style
    };
  }

  if (animationState.enter && direction === 'horizontal' && collapseRef.current !== null) {
    mergedStyles = {
      width: `${collapseRef.current.scrollWidth}px`,
      ...style
    };
  }

  if (animationState.exit && (direction === 'horizontal' || direction === 'horizontal-full') && collapseRef.current !== null) {
    mergedStyles = { width: '0px', ...style };
  }

  const mergedClassName = mergeClasses(styles.base, styles.directions[direction], className);

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyles}
      className={mergedClassName}
      ref={collapseRef}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
