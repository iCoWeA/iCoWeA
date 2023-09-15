import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import fadeConfig from '../../configs/fadeConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { setStyles, mergeClasses } from '../../utils/propsHelper';

export interface FadeProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  keepMounted?: boolean;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = fadeConfig.styles;
  const { onEnter, onExit, open, keepMounted, style, className, ...restProps } = {
    ...fadeConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const fadeRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(fadeRef.current, open, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => fadeRef.current, [
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
   * Set styles
   */
  useEffect(() => {
    if (animationState.current === AnimationStates.ENTERING) {
      setStyles<HTMLDivElement>(fadeRef.current, { opacity: '100', ...style });
    }

    if (animationState.current === AnimationStates.EXITING) {
      setStyles<HTMLDivElement>(fadeRef.current, { opacity: '0', ...style });
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
      ref={fadeRef}
      {...restProps}
    />
  );
});

Fade.displayName = 'Fade';

export default Fade;
