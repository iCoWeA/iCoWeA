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
  type TransitionEventHandler,
  useEffect,
  type ReactNode,
  useCallback
} from 'react';
import themeContext from '../../contexts/theme';
import useTransition, { TransitionStates, type TransitionConfig } from '../../hooks/useTransition';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';
import { calculateResponsiveCords } from '../../utils/positiontHelper';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import useScroll from '../../hooks/useScroll';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  anchorRef?: HTMLElement | null;
  position: Positions;
  gap?: number;
  responsive?: boolean;
  overlayRef?: HTMLElement | null;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentRef.current, []);

  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.popover;
  const {
    onClose,
    open,
    anchorRef,
    position,
    gap,
    responsive,
    overlayRef,
    unmountOnExit,
    transitionConfig,
    onTransitionEnd,
    onAnimationEnd,
    style,
    className,
    children,
    ...restProps
  } = mergeProps(defaultProps, props);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);

  mergedTransitionConfig.onExited = () => {
    if (onClose !== undefined) {
      onClose();
    }

    if (transitionConfig.onExited !== undefined) {
      transitionConfig.onExited();
    }
  };

  const { state: transitionState, enterState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  const scrollHandler = useCallback((): void => {
    if (componentRef.current !== null) {
      const calculatedRootCords = calculateResponsiveCords(anchorRef, componentRef.current, position, gap, responsive);

      componentRef.current.style.top = `${calculatedRootCords.top}px`;
      componentRef.current.style.left = `${calculatedRootCords.left}px`;
    }
  }, [anchorRef, position, gap, responsive]);

  useOutsideClick(componentRef.current, exit, transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED);

  useScroll(scrollHandler, enterState);

  useEffect(() => {
    if (anchorRef !== null) {
      if (open) {
        enter();
      } else {
        exit();
      }
    }
  }, [open, anchorRef]);

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

  const calculatedRootCords = calculateResponsiveCords(anchorRef, componentRef.current, position, gap, responsive);

  const mergedStyle = mergeStyles(
    {
      opacity: `${(transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED) && componentRef.current !== null ? 100 : 0}`,
      top: `${calculatedRootCords.top}px`,
      left: `${calculatedRootCords.left}px`,
      transitionDuration: `${open ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms`
    },
    style
  );

  const mergedClassName = mergeClasses(styles.base, className, transitionClassName);

  const childrenNode = anchorRef !== null && (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) && children;

  const node = (
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

  return overlayRef === null ? node : createPortal(node, overlayRef);
});

Popover.displayName = 'Popover';

export default Popover;
