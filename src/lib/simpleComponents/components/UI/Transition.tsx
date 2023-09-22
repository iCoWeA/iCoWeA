import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import transitionConfig from '../../configs/transitionConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';

export interface TransitionProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  open?: boolean;
  unmountOnExit?: boolean;
}

const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = transitionConfig.styles;
  const { onEnter, onExit, onEntering, onExiting, open, unmountOnExit, className, children, ...restProps } = {
    ...transitionConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const transitionRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const { state: animationState, startAnimation, stopAnimation } = useAnimation(false);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => transitionRef.current, []);

  /* --- Set open state --- */
  useEffect(() => {
    startAnimation(open);
  }, [open]);

  useEffect(() => {
    const transitionEndHandler = (event: TransitionEvent): void => {
      if (event.target === transitionRef.current) {
        stopAnimation();
      }
    };

    transitionRef.current?.addEventListener('transitionend', transitionEndHandler);

    return () => {
      transitionRef.current?.removeEventListener('transitionend', transitionEndHandler);
    };
  }, []);

  /* --- Set state --- */
  if (animationState.current === AnimationStates.ENTERING && onEntering !== undefined) {
    onEntering();
  }

  if (animationState.current === AnimationStates.ENTERED && onEnter !== undefined) {
    onEnter();
  }

  if (animationState.current === AnimationStates.EXITING && onExiting !== undefined) {
    onExiting();
  }

  if (animationState.current === AnimationStates.EXITED && onExit !== undefined) {
    onExit();
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, animationState.current === AnimationStates.EXITED && !open && styles.hide, className);

  const childrenNode = unmountOnExit && !open && animationState.current === AnimationStates.EXITED ? null : children;

  return (
    <div
      className={mergedClassName}
      ref={transitionRef}
      {...restProps}
    >
      {childrenNode}
    </div>
  );
});

Transition.displayName = 'Transition';

export default Transition;
