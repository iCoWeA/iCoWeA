import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useEffect,
  useMemo
} from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useTransition, { TransitionStates } from '../../../hooks/useTransition';
import { setTransitionStyle } from '../../../utils/transitionHelper';
import transitionConfig from './transitionConfig';

export type TransitionDefaultProps = {
  transition?: Transitions;
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
    transition,
    smooth,
    unmountOnExit,
    enter,
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
  const isUnmounted = state === TransitionStates.EXIT && !enter;

  const transitionEndHandler = useCallback((event: Event): void => {
    if (event.target === ref.current) {
      stopTransition();
    }
  }, []);

  useEffect(() => {
    startTransition(enter);
  }, [enter]);

  useEffect(() => {
    const isEntering = state === TransitionStates.ENTER || state === TransitionStates.ENTERING;

    setTransitionStyle(ref, transition, smooth, isEntering, isUnmounted);
  }, [transition, smooth, state, isUnmounted]);

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
  const mergedClassName = useMemo(() => {
    const styles = transitionConfig.styles;
    const transitionVariant = smooth ? 'smooth' : 'default';

    return mergeClasses(
      styles.base,
      styles.transitions[transitionVariant][transition],
      defaultClassName,
      className
    );
  }, [smooth, transition, defaultClassName, className]);

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
