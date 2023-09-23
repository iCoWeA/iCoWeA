import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import transitionConfig from '../../configs/transitionConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import { mergeClasses } from '../../utils/propsHelper';
import useAddEventListener from '../../hooks/useAddEventListener';

export type CollapseDirections = 'horizontal' | 'horizontal-full' | 'vertical' | 'vertical-full';

export interface TransitionProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  open?: boolean;
  unmountOnExit?: boolean;
  fade?: boolean;
  grow?: boolean;
  slide?: Directions;
  collapse?: CollapseDirections;
}

const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = transitionConfig.styles;
  const { onEnter, onExit, onEntering, onExiting, open, unmountOnExit, fade, grow, slide, collapse, className, children, ...restProps } = {
    ...transitionConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const transitionRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const { state: animationState, startAnimation, stopAnimation } = useAnimation(open);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => transitionRef.current, []);

  /* --- Set open state --- */
  useEffect(() => {
    startAnimation(open);
  }, [open]);

  const transitionEndHandler = useCallback((event: TransitionEvent): void => {
    if (event.target === transitionRef.current) {
      stopAnimation();
    }
  }, []);

  useAddEventListener(transitionRef, 'transitionend', transitionEndHandler);

  /* -- Set default state --- */
  useEffect(() => {
    if (transitionRef.current === null) {
      return;
    }

    if (animationState.current === AnimationStates.ENTERED) {
      transitionRef.current.className = mergeClasses(transitionRef.current.className, 'block');

      if (fade) {
        transitionRef.current.style.opacity = '100';
      }

      if (grow) {
        transitionRef.current.style.transform = 'scale(100%)';
      }

      if (slide === 'top') {
        transitionRef.current.style.transform = 'translate(-50%, 0%)';
      }

      if (slide === 'bottom') {
        transitionRef.current.style.transform = 'translate(-50%, -100%)';
      }

      if (slide === 'left') {
        transitionRef.current.style.transform = 'translate(0%, -50%)';
      }

      if (slide === 'right') {
        transitionRef.current.style.transform = 'translate(-100%, -50%)';
      }

      if (collapse === 'vertical') {
        transitionRef.current.style.height = `${transitionRef.current.scrollHeight}px`;
      }

      if (collapse === 'horizontal') {
        transitionRef.current.style.width = `${transitionRef.current.scrollWidth}px`;
      }

      if (collapse === 'vertical-full') {
        transitionRef.current.style.height = '100%';
      }

      if (collapse === 'horizontal-full') {
        transitionRef.current.style.width = '100%';
      }
    }

    if (animationState.current === AnimationStates.EXITED) {
      if (fade) {
        transitionRef.current.style.opacity = '0';
      }

      if (grow) {
        transitionRef.current.style.transform = 'scale(0%)';
      }

      if (slide === 'top') {
        transitionRef.current.style.transform = 'translate(-50%, -100%)';
      }

      if (slide === 'bottom') {
        transitionRef.current.style.transform = 'translate(-50%, 0%)';
      }

      if (slide === 'left') {
        transitionRef.current.style.transform = 'translate(-100%, -50%)';
      }

      if (slide === 'right') {
        transitionRef.current.style.transform = 'translate(0%, -50%)';
      }

      if (collapse === 'horizontal' || collapse === 'horizontal-full') {
        transitionRef.current.style.width = '0px';
      }

      if (collapse === 'vertical' || collapse === 'vertical-full') {
        transitionRef.current.style.height = '0px';
      }
    }
  }, []);

  /* --- Set state --- */
  if (animationState.current === AnimationStates.ENTERING && transitionRef.current !== null) {
    if (onEntering !== undefined) {
      onEntering();
    }

    if (fade) {
      transitionRef.current.style.opacity = '100';
    }

    if (grow) {
      transitionRef.current.style.transform = 'scale(100%)';
    }

    if (slide === 'top') {
      transitionRef.current.style.transform = 'translate(-50%, 0%)';
    }

    if (slide === 'bottom') {
      transitionRef.current.style.transform = 'translate(-50%, -100%)';
    }

    if (slide === 'left') {
      transitionRef.current.style.transform = 'translate(0%, -50%)';
    }

    if (slide === 'right') {
      transitionRef.current.style.transform = 'translate(-100%, -50%)';
    }

    if (collapse === 'vertical') {
      transitionRef.current.style.height = `${transitionRef.current.scrollHeight}px`;
    }

    if (collapse === 'horizontal') {
      transitionRef.current.style.width = `${transitionRef.current.scrollWidth}px`;
    }

    if (collapse === 'vertical-full') {
      transitionRef.current.style.height = '100%';
    }

    if (collapse === 'horizontal-full') {
      transitionRef.current.style.width = '100%';
    }
  }

  if (animationState.current === AnimationStates.ENTERED && onEnter !== undefined) {
    onEnter();
  }

  if (animationState.current === AnimationStates.EXITING && transitionRef.current !== null) {
    if (onExiting !== undefined) {
      onExiting();
    }

    if (fade) {
      transitionRef.current.style.opacity = '0';
    }

    if (grow) {
      transitionRef.current.style.transform = 'scale(0%)';
    }

    if (slide === 'top') {
      transitionRef.current.style.transform = 'translate(-50%, -100%)';
    }

    if (slide === 'bottom') {
      transitionRef.current.style.transform = 'translate(-50%, 0%)';
    }

    if (slide === 'left') {
      transitionRef.current.style.transform = 'translate(-100%, -50%)';
    }

    if (slide === 'right') {
      transitionRef.current.style.transform = 'translate(0%, -50%)';
    }

    if (collapse === 'horizontal' || collapse === 'horizontal-full') {
      transitionRef.current.style.width = '0px';
    }

    if (collapse === 'vertical' || collapse === 'vertical-full') {
      transitionRef.current.style.height = '0px';
    }
  }

  if (animationState.current === AnimationStates.EXITED && onExit !== undefined) {
    onExit();
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    slide !== undefined && styles.slide,
    slide !== undefined && styles.positions[slide],
    ((animationState.current === AnimationStates.EXITED && !open) || transitionRef.current === null) && styles.hide,
    className
  );

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
