import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, type TransitionEvent } from 'react';
import fadeConfig from '../../configs/fadeConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';

export interface FadeProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  open?: boolean;
  keepMounted?: boolean;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = fadeConfig.styles;
  const { onEnter, onExit, onEntering, onExiting, onTransitionEnd, open, keepMounted, style, className, ...restProps } = {
    ...fadeConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const fadeRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const { state: animationState, startAnimation, endAnimation } = useAnimation(open);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => fadeRef.current, [
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
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (event.target === fadeRef.current) {
      endAnimation(onEnter, onExit);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    animationState.enter && styles.open,
    animationState.current === AnimationStates.EXITED && !open && styles.hide,
    className
  );

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      className={mergedClassName}
      ref={fadeRef}
      {...restProps}
    />
  );
});

Fade.displayName = 'Fade';

export default Fade;
