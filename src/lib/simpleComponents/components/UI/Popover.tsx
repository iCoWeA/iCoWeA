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
  disableOutsideClick?: boolean;
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

const Popover = forwardRef<HTMLDivElement, PopoverProps>((rootProps, rootRef) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles: rootStyles } = config.popover;
  const {
    open,
    position,
    gap,
    responsive,
    overlayRef,
    lockScroll,
    disableOutsideClick,
    unmountOnExit,
    transitionConfig,
    handler,
    backdrop,
    backdropProps,
    onTransitionEnd: onRootTransitionEnd,
    onAnimationEnd: onRootAnimationEnd,
    style: rootStyle,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = mergeProps(defaultProps, rootProps);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);
  let handlerNode: ReactNode;
  let backdropNode: ReactNode;

  const componentsRef = useRef<{ root: HTMLDivElement | null; handler: HTMLElement | null }>({ root: null, handler: null });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => componentsRef.current.root, []);

  const { state: transitionState, enterState, exitState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  const resize = useCallback((): void => {
    if (componentsRef.current.root !== null) {
      setElementPosition(
        componentsRef.current.root,
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

  useOutsideClick(
    componentsRef.current.root,
    exit,
    (transitionState === TransitionStates.ENTERING || transitionState === TransitionStates.ENTERED) && !backdrop && !disableOutsideClick
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
      exit();

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

  /* Set root props */
  const transitionEndRootHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING && event.target === componentsRef.current.root) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING && event.target === componentsRef.current.root) {
      exit(true);
    }

    if (onRootTransitionEnd !== undefined) {
      onRootTransitionEnd(event);
    }
  };

  const animationEndRootHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState === TransitionStates.ENTERING && event.target === componentsRef.current.root) {
      enter(true);
    }

    if (transitionState === TransitionStates.EXITING && event.target === componentsRef.current.root) {
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
      transitionDuration: `${enterState ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`
    },
    rootStyle
  );

  const mergedRootClassName = mergeClasses(rootStyles.base, rootClassName, transitionClassName);

  const rootChildrenNode = componentsRef.current.root !== null && (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) && (
    <>
      {backdropNode}
      {rootChildren}
    </>
  );

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
