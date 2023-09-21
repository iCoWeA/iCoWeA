import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import transitionConfig from '../../configs/TransitionConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';

export interface TransitionProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  open?: boolean;
  keepMounted?: boolean;
}

const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = transitionConfig.styles;
  const { onEnter, onExit, onEntering, onExiting, open, keepMounted, className, ...restProps } = {
    ...transitionConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const transitionRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const { state: animationState, startAnimation } = useAnimation(open, transitionRef, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => transitionRef.current, [
    !keepMounted && !open && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set open state --- */
  useEffect(() => {
    startAnimation(open, onEntering, onExiting);
  }, [open, onEntering, onExiting]);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, animationState.current === AnimationStates.EXITED && !open && styles.hide, className);

  return (
    <div
      className={mergedClassName}
      ref={transitionRef}
      {...restProps}
    />
  );
});

Transition.displayName = 'Transition';

export default Transition;
