import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import slideConfig from '../../configs/slideConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';

export interface SlideProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEnter?: () => void;
  onExit?: () => void;
  direction?: Directions;
  open?: boolean;
  keepMounted?: boolean;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = slideConfig.styles;
  const { onEnter, onExit, direction, open, keepMounted, className, ...restProps } = {
    ...slideConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const slideRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(slideRef.current, open, onEnter, onExit);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => slideRef.current, [
    !keepMounted && !open && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && animationState.exit) {
      enter();
    }

    if (!open && animationState.enter) {
      exit();
    }
  }, [open, animationState.enter, animationState.exit]);

  /* --- Unmount --- */
  if (!keepMounted && !open && animationState.current === AnimationStates.EXITED) {
    return <></>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.directions[direction],
    animationState.enter && styles.open[direction],
    animationState.current === AnimationStates.EXITED && !open && styles.hide,
    className
  );

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={slideRef}
      {...restProps}
    />
  );
});

Slide.displayName = 'Slide';

export default Slide;
