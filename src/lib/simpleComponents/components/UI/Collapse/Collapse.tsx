import React, { forwardRef, type BaseHTMLAttributes, type TransitionEvent, type AnimationEvent, useRef, useImperativeHandle, useEffect } from 'react';
import useTransition, { TransitionStates } from '../../../hooks/useTransition';
import collapseConfig from '../../../configs/collapseConfig';
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
  const { onEntering, onExiting, onEnter, onExit, open, unmountOnExit, onTransitionEnd, onAnimationEnd, style, className, ...restProps } = {
    ...defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const componentRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  /* --- Set states --- */
  const { state: transitionState, enter, stopEntering, exit, stopExiting } = useTransition();

  /* --- Set open state --- */
  useEffect(() => {
    if (open && transitionState.exit) {
      enter(onEntering);
    }

    if (!open && transitionState.enter) {
      exit(onExiting);
    }
  }, [open, transitionState.enter, transitionState.exit]);

  /* --- Unmount --- */
  if (unmountOnExit && !open && transitionState.current === TransitionStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentRef.current) {
      stopEntering(onEnter);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentRef.current) {
      stopExiting(onExit);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentRef.current) {
      stopEntering(onEnter);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentRef.current) {
      stopExiting(onExit);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  const mergedStyle = {
    height: `${transitionState.enter ? componentRef.current?.scrollHeight ?? 0 : 0}px`,
    ...style
  };

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
      className={mergedClassName}
      ref={componentRef}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
