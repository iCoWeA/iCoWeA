import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type TransitionEvent,
  type AnimationEvent,
  useRef,
  useImperativeHandle,
  useEffect,
  type CSSProperties,
  type AnimationEventHandler,
  type TransitionEventHandler
} from 'react';
import useTransition, { type TransitionConfig, TransitionStates } from '../../hooks/useTransition';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, setDefaultProps } from '../../utils/propsHelper';

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.collapse;
  const { open, unmountOnExit, transitionConfig, onTransitionEnd, onAnimationEnd, style, className, ...restProps } = setDefaultProps(props, defaultProps);
  let mergedStyle: CSSProperties = {};

  const height = useRef(0);
  const componentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  const { state: transitionState, className: transitionClassName, enterState, exitState, enter, exit } = useTransition(transitionConfig);

  useEffect(() => {
    height.current = componentRef.current?.offsetHeight ?? 0;
  }, []);

  if (exitState && open) {
    enter();
  }

  if (enterState && !open) {
    exit();
  }

  if (unmountOnExit && transitionState === TransitionStates.EXITED) {
    return <></>;
  }

  /* Set props */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING) {
      exit(true);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING) {
      exit(true);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  if (componentRef.current !== null) {
    mergedStyle = mergeStyles(
      { height: `${open ? height.current : 0}px`, transitionDuration: `${open ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms` },
      style
    );
  } else {
    mergedStyle = style;
  }

  const mergedClassName = mergeClasses(styles.base, className, transitionClassName);

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
      className={mergedClassName}
      ref={componentRef}
      {...restProps}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
