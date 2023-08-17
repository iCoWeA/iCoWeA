import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type TransitionEvent,
  useImperativeHandle,
  useRef,
  type AnimationEvent,
  type AnimationEventHandler,
  type CSSProperties,
  type TransitionEventHandler
} from 'react';
import themeContext from '../../contexts/theme';
import useTransition, { TransitionStates, type TransitionConfig } from '../../hooks/useTransition';
import { mergeClasses, mergeStyles, setDefaultProps } from '../../utils/propsHelper';
import { type PositionProps, setOrigin } from '../../utils/positiontHelper';
import { createPortal } from 'react-dom';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  anchorRef?: HTMLElement | null;
  position?: PositionProps;
  transformPosition?: PositionProps;
  overlayRef?: HTMLElement | null;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.popover;
  const {
    open,
    anchorRef,
    position,
    transformPosition,
    overlayRef,
    unmountOnExit,
    transitionConfig,
    onTransitionEnd,
    onAnimationEnd,
    style,
    className,
    ...restProps
  } = setDefaultProps(props, defaultProps);

  const componentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  const { state: transitionState, className: transitionClassName, enterState, exitState, enter, exit } = useTransition(transitionConfig);

  if (exitState && open) {
    enter();
  }

  if (enterState && !open) {
    exit();
  }

  if (anchorRef === undefined || (unmountOnExit && transitionState === TransitionStates.EXITED)) {
    return <></>;
  }

  const origin = setOrigin(anchorRef, position, componentRef.current, transformPosition);

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

  const mergeStyle = mergeStyles(
    {
      top: `${origin.top}px`,
      left: `${origin.left}px`
    },
    style
  );

  const mergedClassName = mergeClasses(
    styles.base,
    (transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED) && styles.open,
    className,
    transitionClassName
  );

  const node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergeStyle}
      className={mergedClassName}
      ref={componentRef}
      {...restProps}
    />
  );

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Popover.displayName = 'Popover';

export default Popover;
