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
  useCallback,
  type ReactElement,
  cloneElement,
  type MouseEvent,
  type ReactNode
} from 'react';
import { type PopoverPositions } from '../../configs/popoverConfig';
import themeContext from '../../contexts/theme';
import useTransition, { TransitionStates, type TransitionConfig } from '../../hooks/useTransition';
import { setElementPosition } from '../../utils/positiontHelper';
import useOutsideClick from '../../hooks/useOutsideClick';
import useScroll from '../../hooks/useScroll';
import useResize from '../../hooks/useResize';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';
import { createPortal } from 'react-dom';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  position?: PopoverPositions;
  gap?: number;
  responsive?: boolean;
  overlayRef?: Element | null;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  handler?: ReactElement;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
  children?: ReactElement;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((rootProps, rootRef) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles: rootStyles } = config.popover;
  const {
    open,
    position,
    gap,
    responsive,
    overlayRef,
    unmountOnExit,
    transitionConfig,
    handler,
    onTransitionEnd: onRootTransitionEnd,
    onAnimationEnd: onRootAnimationEnd,
    style: rootStyle,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = mergeProps(defaultProps, rootProps);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);
  let handlerNode: ReactNode;

  const componentsRef = useRef<{ root: HTMLDivElement | null; handler: HTMLElement | null }>({ root: null, handler: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => componentsRef.current.root, []);

  const { state: transitionState, enterState, exitState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  const resize = useCallback((): void => {
    if (componentsRef.current.root !== null && componentsRef.current.handler !== null) {
      setElementPosition(
        componentsRef.current.root,
        position,
        componentsRef.current.handler.offsetTop,
        componentsRef.current.handler.offsetLeft,
        componentsRef.current.handler.offsetHeight,
        componentsRef.current.handler.offsetWidth,
        gap,
        responsive
      );
    }
  }, [position, gap, responsive]);

  useOutsideClick(componentsRef.current.root, exit, transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED);

  useScroll(resize, enterState);

  useResize(resize, enterState);

  useEffect(() => {
    if (open === true) {
      enter();
    }

    if (open === false) {
      exit();
    }
  }, [open]);

  resize();

  /* Set handler props */
  if (handler !== undefined) {
    const onHandlerClick = (event: MouseEvent<HTMLElement>): void => {
      if (open === undefined && enterState) {
        exit();
      }

      if (open === undefined && exitState) {
        enter();
      }

      if (handler.props.onClick !== undefined) {
        handler.props.onClick(event);
      }
    };

    if ((handler as Record<string, any>)?.ref === undefined || (handler as Record<string, any>).ref === null) {
      handlerNode = cloneElement(handler, {
        onClick: onHandlerClick,
        ref: (element: HTMLElement) => {
          componentsRef.current.handler = element;
        }
      });
    } else {
      componentsRef.current.handler = (handler as Record<string, any>).ref.current;

      handlerNode = cloneElement(handler, {
        onClick: onHandlerClick
      });
    }
  }

  /* Set root props */
  const transitionEndRootHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING) {
      exit(true);
    }

    if (onRootTransitionEnd !== undefined) {
      onRootTransitionEnd(event);
    }
  };

  const animationEndRootHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING) {
      exit(true);
    }

    if (onRootAnimationEnd !== undefined) {
      onRootAnimationEnd(event);
    }
  };

  const setRootRef = (element: HTMLDivElement): void => {
    componentsRef.current.root = element;
  };

  const mergedRootStyle = mergeStyles(
    {
      opacity: `${transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED ? 100 : 0}`,
      transitionDuration: `${enterState ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms`
    },
    rootStyle
  );

  const mergedRootClassName = mergeClasses(rootStyles.base, rootClassName, transitionClassName);

  const rootChildrenNode =
    componentsRef.current.root !== null &&
    componentsRef.current.handler !== null &&
    (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) &&
    rootChildren;

  let rootNode = (
    <div
      onTransitionEnd={transitionEndRootHandler}
      onAnimationEnd={animationEndRootHandler}
      style={mergedRootStyle}
      className={mergedRootClassName}
      ref={setRootRef}
      {...restRootProps}
    >
      {rootChildrenNode}
    </div>
  );

  rootNode = overlayRef === null ? rootNode : createPortal(rootNode, overlayRef);

  return (
    <>
      {handlerNode}
      {rootNode}
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;
