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
  type ReactNode,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import themeContext from '../../contexts/theme';
import useTransition, { TransitionStates, type TransitionConfig } from '../../hooks/useTransition';
import { setElementPosition } from '../../utils/positiontHelper';
import useScroll from '../../hooks/useScroll';
import useResize from '../../hooks/useResize';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';

export interface TooltipProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  color?: Colors;
  position?: Positions;
  gap?: number;
  responsive?: boolean;
  followCursor?: boolean;
  overlayRef?: Element | null;
  unmountOnExit?: boolean;
  transitionConfig?: TransitionConfig;
  handler?: ReactElement;
  arrow?: boolean;
  arrowProps?: BaseHTMLAttributes<HTMLDivElement>;
  onTransitionEnd?: TransitionEventHandler;
  onAnimationEnd?: AnimationEventHandler;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}

const setArrowPosition = (element: HTMLElement | null, position: Positions): void => {
  if (element === null) {
    return;
  }

  const splitedPosition = position.split('-')[0];

  if (splitedPosition === 'top') {
    element.style.top = '100%';
    element.style.left = 'calc(50% - 0.25rem)';
    element.style.transform = 'rotate(180deg)';
    element.style.translate = '0 0';
  }

  if (splitedPosition === 'bottom') {
    element.style.top = '0';
    element.style.left = 'calc(50% - 0.25rem)';
    element.style.transform = 'rotate(0deg)';
    element.style.translate = '0 -100%';
  }

  if (splitedPosition === 'left') {
    element.style.top = 'calc(50% - 0.25rem)';
    element.style.left = '100%';
    element.style.transform = 'rotate(90deg)';
    element.style.translate = '0 0';
  }

  if (splitedPosition === 'right') {
    element.style.top = 'calc(50% - 0.25rem)';
    element.style.left = '0';
    element.style.transform = 'rotate(-90deg)';
    element.style.translate = '-100% 0';
  }
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((containerProps, containerRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.tooltip;
  const {
    open,
    color,
    position,
    gap,
    responsive,
    followCursor,
    overlayRef,
    unmountOnExit,
    transitionConfig,
    handler,
    arrow,
    arrowProps,
    onTransitionEnd: onContainerTransitionEnd,
    onAnimationEnd: onContainerAnimationEnd,
    style: containerStyle,
    className: containerClassName,
    children: containerChildren,
    ...restContainerProps
  } = mergeProps(defaultProps, containerProps);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);
  let handlerNode: ReactNode;
  let arrowNode: ReactNode;

  const componentsRef = useRef<{ container: HTMLDivElement | null; handler: HTMLElement | null; arrow: HTMLDivElement | null }>({
    container: null,
    handler: null,
    arrow: null
  });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(containerRef, () => componentsRef.current.container, []);

  const [cursorY, setCursorY] = useState(-1);
  const [cursorX, setCursorX] = useState(-1);
  const { state: transitionState, enterState, exitState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  const resize = useCallback((): void => {
    if (componentsRef.current.container !== null && componentsRef.current.handler !== null) {
      let newPosition: Positions;

      if (!followCursor) {
        newPosition = setElementPosition(
          componentsRef.current.container,
          position,
          componentsRef.current.handler.offsetTop,
          componentsRef.current.handler.offsetLeft,
          componentsRef.current.handler.offsetHeight,
          componentsRef.current.handler.offsetWidth,
          gap,
          responsive
        );
      } else {
        newPosition = setElementPosition(
          componentsRef.current.container,
          position,
          cursorY + document.documentElement.scrollTop,
          cursorX + document.documentElement.scrollLeft,
          0,
          0,
          gap,
          responsive
        );
      }

      if (arrow && componentsRef.current.arrow !== null) {
        setArrowPosition(componentsRef.current.arrow, newPosition);
      }
    }
  }, [followCursor, position, gap, responsive, cursorY, cursorX]);

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

  resize();

  /* Set handler props */
  if (handler !== undefined) {
    const onHandlerMouseEnter = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (open === undefined && exitState) {
        enter();
      }

      if (handler.props.onMouseEnter !== undefined) {
        handler.props.onMouseEnter(event);
      }
    };

    const onHandlerMouseLeave = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (open === undefined && enterState) {
        exit();
      }

      if (handler.props.onMouseLeave !== undefined) {
        handler.props.onMouseLeave(event);
      }
    };

    const onHandlerMouseMove = (event: MouseEvent<HTMLElement>): void => {
      if (followCursor) {
        setCursorY(event.clientY);
        setCursorX(event.clientX);
      }

      if (handler.props.onMouseMove !== undefined) {
        handler.props.onMouseMove(event);
      }
    };

    if (
      (handler as Record<string, any>)?.ref === undefined ||
      (handler as Record<string, any>).ref === null ||
      typeof (handler as Record<string, any>).ref === 'function'
    ) {
      handlerNode = cloneElement(handler, {
        onMouseEnter: onHandlerMouseEnter,
        onMouseLeave: onHandlerMouseLeave,
        onMouseMove: onHandlerMouseMove,
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
        onMouseEnter: onHandlerMouseEnter,
        onMouseLeave: onHandlerMouseLeave,
        onMouseMove: onHandlerMouseMove
      });
    }
  }

  /* Set arrow props */
  if (arrow) {
    const arrowStyles = styles.arrow;
    const { className: arrowClassName, ...restArrowProps } = arrowProps;

    const setArrowRef = (element: HTMLDivElement): void => {
      componentsRef.current.arrow = element;
    };

    const mergedArrowClassName = mergeClasses(arrowStyles.base, arrowStyles.colors[theme][color], arrowClassName);

    arrowNode = (
      <div
        className={mergedArrowClassName}
        ref={setArrowRef}
        {...restArrowProps}
      />
    );
  }

  /* Set container props */
  const containerStyles = styles.container;

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

  const mergedContainerClassName = mergeClasses(containerStyles.base, containerStyles.colors[theme][color], containerClassName, transitionClassName);

  const containerChildrenNode = componentsRef.current.container !== null &&
    componentsRef.current.handler !== null &&
    (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) && (
      <>
        {arrowNode}
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

Tooltip.displayName = 'Tooltip';

export default Tooltip;
