import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type TransitionEvent,
  type AnimationEvent,
  useRef,
  useImperativeHandle,
  type CSSProperties,
  type AnimationEventHandler,
  type TransitionEventHandler,
  type ReactNode,
  useEffect
} from 'react';
import themeContext from '../../contexts/theme';
import useTransition, { type TransitionConfig, TransitionStates } from '../../hooks/useTransition';
import { mergeClasses, mergeProps, mergeStyles } from '../../utils/propsHelper';

export interface CollapseProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.collapse;
  const { open, unmountOnExit, transitionConfig, onTransitionEnd, onAnimationEnd, style, className, children, ...restProps } = mergeProps(defaultProps, props);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);

  const { state: transitionState, enterState, exitState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  useEffect(() => {
    if (open && exitState) {
      enter();
    }

    if (!open && enterState) {
      exit();
    }
  }, [open, exitState, enterState]);

  /* Set props */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING && event.target === componentRef.current) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING && event.target === componentRef.current) {
      exit(true);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING && event.target === componentRef.current) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING && event.target === componentRef.current) {
      exit(true);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  const mergedStyle = mergeStyles(
    {
      height: `${!open || componentRef.current === null ? 0 : componentRef.current.scrollHeight}px`,
      transitionDuration: `${open ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`
    },
    style
  );

  const mergedClassName = mergeClasses(styles.base, className, transitionClassName);

  const childrenNode = (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) && children;

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
      className={mergedClassName}
      ref={componentRef}
      {...restProps}
    >
      {childrenNode}
    </div>
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
