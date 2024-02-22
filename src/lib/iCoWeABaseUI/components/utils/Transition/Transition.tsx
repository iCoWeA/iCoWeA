import React, {
  type BaseHTMLAttributes,
  type TransitionEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react';

import useTransition, { TransitionStates } from '../../../hooks/useTransition';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
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
    onTransitionEnd,
    transition,
    smooth,
    unmountOnExit,
    enter,
    defaultClassName,
    className,
    style,
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
  const transitionEndHandler = useCallback(
    (event: TransitionEvent<HTMLDivElement>): void => {
      if (ref.current === event.target) {
        stopTransition(onEnter, onExit);
      }

      if (onTransitionEnd) {
        onTransitionEnd(event);
      }
    },
    [onEnter, onExit, onTransitionEnd]
  );

  useEffect(() => {
    startTransition(enter, onEntering, onExiting);
  }, [enter, onEntering, onExiting]);

  /* --- Set styles --- */
  const isUnmounted = state === TransitionStates.EXIT && !enter;
  const isEntering = state === TransitionStates.ENTER || state === TransitionStates.ENTERING;

  const mergedStyles = useMemo(
    () =>
      setTransitionStyle(transition, smooth, isEntering, isUnmounted, ref.current?.scrollHeight),
    [transition, smooth, isEntering, isUnmounted]
  );

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
      onTransitionEnd={transitionEndHandler}
      className={mergedClassName}
      style={{
        ...mergedStyles,
        ...style
      }}
      ref={ref}
      {...restProps}
    >
      {unmountOnExit && isUnmounted ? null : children}
    </div>
  );
});

Transition.displayName = 'Transition';

export default Transition;
