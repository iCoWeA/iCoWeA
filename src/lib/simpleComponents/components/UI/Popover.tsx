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
  type MouseEvent as ReactMouseEvent,
  type ReactNode
} from 'react';
import { createPortal } from 'react-dom';
import { type PopoverPositions } from '../../configs/popoverConfig';
import themeContext from '../../contexts/theme';
import useTransition, { TransitionStates, type TransitionConfig } from '../../hooks/useTransition';
import { setElementPosition } from '../../utils/positiontHelper';
import useOutsideClick from '../../hooks/useOutsideClick';
import useScroll from '../../hooks/useScroll';
import useResize from '../../hooks/useResize';
import Backdrop, { type BackdropProps } from './Backdrop';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  position?: PopoverPositions;
  gap?: number;
  responsive?: boolean;
  overlayRef?: Element | null;
  lockScroll?: boolean;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  handler?: ReactElement;
  backdrop?: boolean;
  backdropProps?: BackdropProps;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((containerProps, containerRef) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles: containerStyles } = config.popover;
  const {
    open,
    position,
    gap,
    responsive,
    overlayRef,
    lockScroll,
    unmountOnExit,
    transitionConfig,
    handler,
    backdrop,
    backdropProps,
    onTransitionEnd: onContainerTransitionEnd,
    onAnimationEnd: onContainerAnimationEnd,
    style: containerStyle,
    className: containerClassName,
    children: containerChildren,
    ...restContainerProps
  } = mergeProps(defaultProps, containerProps);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);
  let handlerNode: ReactNode;
  let backdropNode: ReactNode;

  const componentsRef = useRef<{ container: HTMLDivElement | null; handler: HTMLElement | null }>({ container: null, handler: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(containerRef, () => componentsRef.current.container, []);

  const { state: transitionState, enterState, exitState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  const resize = useCallback((): void => {
    if (componentsRef.current.container !== null) {
      setElementPosition(
        componentsRef.current.container,
        position,
        componentsRef.current.handler?.offsetTop,
        componentsRef.current.handler?.offsetLeft,
        componentsRef.current.handler?.offsetHeight,
        componentsRef.current.handler?.offsetWidth,
        gap,
        responsive
      );
    }
  }, [position, gap, responsive]);

  const outsideClickHandler = useCallback((event: MouseEvent) => {
    if (!(componentsRef.current.container?.contains(event.target as Node) ?? false)) {
      exit();
    }
  }, []);

  useOutsideClick(
    outsideClickHandler,
    (transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED) && open === undefined && !backdrop
  );

  useScroll(resize, enterState);

  useResize(resize, enterState);

  useEffect(() => {
    if (open === true && exitState) {
      enter();
    }

    if (open === false && enterState) {
      exit();
    }
  }, [open, exitState, enterState]);

  useEffect(() => {
    if (lockScroll && enterState) {
      document.body.style.overflow = 'hidden';
    }

    if (lockScroll && exitState) {
      document.body.style.overflow = 'scroll';
    }
  }, [lockScroll, enterState, exitState]);

  resize();

  /* Set handler props */
  if (handler !== undefined) {
    const onHandlerClick = (event: ReactMouseEvent<HTMLElement>): void => {
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

    if (
      (handler as Record<string, any>)?.ref === undefined ||
      (handler as Record<string, any>).ref === null ||
      typeof (handler as Record<string, any>).ref === 'function'
    ) {
      handlerNode = cloneElement(handler, {
        onClick: onHandlerClick,
        ref: (element: HTMLElement) => {
          componentsRef.current.handler = element;

          if (typeof (handler as Record<string, any>).ref === 'function') {
            (handler as Record<string, any>).ref(element);
          }
        }
      });
    } else {
      componentsRef.current.handler = (handler as Record<string, any>).ref.current;

      handlerNode = cloneElement(handler, {
        onClick: onHandlerClick
      });
    }
  }

  /* Set backdrop */
  if (backdrop) {
    const {
      open: backdropOpen = transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED,
      onClose: onBackdropClose,
      style: backdropStyle,
      ...restBackdropProps
    } = mergeProps(defaultProps.backdropProps, backdropProps);

    const closeBackdropHandler = (): void => {
      if (open === undefined) {
        exit();
      }

      if (onBackdropClose !== undefined) {
        onBackdropClose();
      }
    };

    const mergedBackdropStyle = mergeStyles({
      transitionDuration: `${enterState ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`
    });

    backdropNode = (
      <Backdrop
        open={backdropOpen}
        onClose={closeBackdropHandler}
        style={mergedBackdropStyle}
        {...restBackdropProps}
      />
    );
  }

  /* Set container props */
  const transitionEndContainerHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING && event.target === componentsRef.current.container) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING && event.target === componentsRef.current.container) {
      exit(true);
    }

    if (onContainerTransitionEnd !== undefined) {
      onContainerTransitionEnd(event);
    }
  };

  const animationEndContainerHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING && event.target === componentsRef.current.container) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING && event.target === componentsRef.current.container) {
      exit(true);
    }

    if (onContainerAnimationEnd !== undefined) {
      onContainerAnimationEnd(event);
    }
  };

  const setContainerRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  const mergedContainerStyle = mergeStyles(
    {
      opacity: `${transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED ? 100 : 0}`,
      transitionDuration: `${enterState ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`
    },
    containerStyle
  );

  const mergedContainerClassName = mergeClasses(containerStyles.base, containerClassName, transitionClassName);

  const containerChildrenNode = componentsRef.current.container !== null &&
    (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) && (
      <>
        {backdropNode}
        {containerChildren}
      </>
  );

  let containerNode = (
    <div
      onTransitionEnd={transitionEndContainerHandler}
      onAnimationEnd={animationEndContainerHandler}
      style={mergedContainerStyle}
      className={mergedContainerClassName}
      ref={setContainerRef}
      {...restContainerProps}
    >
      {containerChildrenNode}
    </div>
  );

  containerNode = overlayRef === null ? containerNode : createPortal(containerNode, overlayRef);

  return (
    <>
      {handlerNode}
      {containerNode}
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;
