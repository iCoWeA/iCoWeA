import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect
} from 'react';

import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useTransition, { TransitionStates } from '../../../hooks/useTransition';
import { setTransitionStyle } from '../../../utils/transitionHelper';
import { mergeClasses } from '../../../utils/utils';
import transitionConfig from './transitionConfig';

export type TransitionDefaultProps = {
  variant?: Transitions;
  smooth?: boolean;
  unmountOnExit?: boolean;
};

export type TransitionProps = BaseHTMLAttributes<HTMLDivElement> &
TransitionDefaultProps & {
  onEnter?: () => void;
  onExit?: () => void;
  onEntering?: () => void;
  onExiting?: () => void;
  enter?: boolean;
};

const Transition = forwardRef<HTMLDivElement, TransitionProps>((props, forwardedRef) => {
  const {
    onEnter,
    onExit,
    onEntering,
    onExiting,
    enter,
    variant,
    smooth,
    unmountOnExit,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('transition', transitionConfig.defaultProps, props);

  const ref = useRef<HTMLDivElement>(null);

  const { state, startTransition, stopTransition } = useTransition(enter);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => ref.current,
    []
  );

  /* --- Set event handlers --- */
  const isEntering = state === TransitionStates.ENTER || state === TransitionStates.ENTERING;
  const isUnmounted = state === TransitionStates.EXIT && !enter;

  const transitionEndHandler = (event: Event): void => {
    if (event.target === ref.current) {
      stopTransition();
    }
  };

  useEffect(() => {
    startTransition(enter);
  }, [enter]);

  useEffect(() => {
    setTransitionStyle(ref, variant, smooth, isEntering, isUnmounted);
  }, [variant, smooth, isEntering, isUnmounted]);

  useEffect(() => {
    if (state === TransitionStates.ENTER && onEnter) {
      onEnter();
    }

    if (state === TransitionStates.EXIT && onExit) {
      onExit();
    }

    if (state === TransitionStates.ENTERING && onEntering) {
      onEntering();
    }

    if (state === TransitionStates.EXITING && onExiting) {
      onExiting();
    }
  }, [state, onEnter, onExit, onEntering, onExiting]);

  useAddEventListener(ref, 'transitionend', transitionEndHandler);

  /* --- Set classes --- */
  const styles = transitionConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    (variant === 'grow-x' || variant === 'grow-y') && styles.grow,
    defaultClassName,
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {unmountOnExit && isUnmounted ? null : children}
    </div>
  );
});

Transition.displayName = 'Transition';

export default Transition;
