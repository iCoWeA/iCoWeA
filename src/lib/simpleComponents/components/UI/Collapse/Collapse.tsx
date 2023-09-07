import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, type TransitionEvent, type AnimationEvent } from 'react';
import collapseConfig from '../../../configs/collapseConfig';
import useAnimation, { AnimationStates } from '../../../hooks/useAnimation';
import { mergeClasses } from '../../../utils/propsHelper';

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  unmountOnExit?: boolean;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = collapseConfig;
  const { onEntering, onExiting, onEnter, onExit, open, unmountOnExit, style, className, ...restProps } = {
    ...defaultProps,
    ...props
  };

  /* --- Set states --- */
  const { state: animationState, enter, stopEntering, exit, stopExiting } = useAnimation();

  /* --- Set refs --- */
  const collapseRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => collapseRef.current, [
    unmountOnExit,
    open,
    animationState.current === AnimationStates.EXITED
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

  /* --- Unmount --- */
  if (unmountOnExit && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === collapseRef.current) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === collapseRef.current) {
      stopExiting(onExit);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === collapseRef.current) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === collapseRef.current) {
      stopExiting(onExit);
    }
  };

  const mergedStyle = {
    height: `${animationState.enter ? collapseRef.current?.scrollHeight ?? 0 : 0}px`,
    ...style
  };

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
      className={mergedClassName}
      ref={collapseRef}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
