import React, { forwardRef, type BaseHTMLAttributes, type TransitionEvent, type AnimationEvent, useRef, useImperativeHandle, useEffect } from 'react';
import collapseConfig from '../../../configs/collapseConfig';
import useTransition, { type TransitionConfig, TransitionStates } from '../../../hooks/useTransition';
import { mergeClasses } from '../../../utils/propsHelper';

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = collapseConfig;
  const { open, unmountOnExit, transitionConfig, onTransitionEnd, onAnimationEnd, style, className, children, ...restProps } = {
    ...defaultProps,
    ...props
  };
  const mergedTransitionConfig = { ...defaultProps.transitionConfig, ...transitionConfig };

  /* --- Set refs --- */
  const componentRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  /* --- Set states --- */
  const { state: transitionState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && transitionState.exit) {
      enter();
    }

    if (!open && transitionState.enter) {
      exit();
    }
  }, [open, transitionState.enter, transitionState.exit]);

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentRef.current) {
      enter(true);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentRef.current) {
      exit(true);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentRef.current) {
      enter(true);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentRef.current) {
      exit(true);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  const mergedStyle = {
    height: `${open ? componentRef.current?.scrollHeight ?? 0 : 0}px`,
    transitionDuration: `${open ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`,
    ...style
  };

  const mergedClassName = mergeClasses(styles.base, className, transitionClassName);

  const childrenNode = (!unmountOnExit || (unmountOnExit && transitionState.current !== TransitionStates.EXITED)) && children;

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
      className={mergedClassName}
      ref={componentRef}
      {...restProps}
    >
      {childrenNode}
    </div>
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
