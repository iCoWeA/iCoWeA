import React, { type BaseHTMLAttributes, forwardRef, useRef, useImperativeHandle, useEffect, useCallback } from 'react';
import fadeConfig from '../../configs/fadeConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import { setStyles, mergeClasses } from '../../utils/propsHelper';

export interface FadeProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  unmountOnExit?: boolean;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = fadeConfig.styles;
  const { onClose, onEnter, onExit, open, closeOnAwayClick, closeDuration, unmountOnExit, style, className, ...restProps } = {
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

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => fadeRef.current, [
    unmountOnExit && !open && animationState.current === AnimationStates.EXITED
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
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isFadeClicked = fadeRef.current?.contains(event.target as Node) ?? false;

    if (!isFadeClicked && onClose !== undefined) {
      onClose();
    }
  }, []);

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
  }, [animationState.enter, closeDuration]);

  /*
   * Set initial style
   */
  useEffect(() => {
    if (animationState.current === AnimationStates.ENTERED) {
      setStyles<HTMLDivElement>(fadeRef.current, { opacity: '100', ...style });
    }
  }, [animationState.current, style]);

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
  if (unmountOnExit && !open && animationState.current === AnimationStates.EXITED) {
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

/* ON_CLOSE() IS NOT IN DEPENDENCY LIST !!! */
