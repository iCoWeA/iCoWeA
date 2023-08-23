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
import { type TooltipPositions, type TooltipColors } from '../../configs/tooltipConfig';
import themeContext from '../../contexts/theme';
import useTransition, { TransitionStates, type TransitionConfig } from '../../hooks/useTransition';
import useScroll from '../../hooks/useScroll';
import useResize from '../../hooks/useResize';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';
import { createPortal } from 'react-dom';

export interface TooltipProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  color?: TooltipColors;
  position?: TooltipPositions;
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
  children?: ReactElement;
}

const setArrowPosition = (element: HTMLElement | null, position: TooltipPositions): void => {
  if (element === null) {
    return;
  }

  const splitedPosition = position.split('-')[0];

  if (splitedPosition === 'top') {
    element.style.top = '100%';
    element.style.left = '50%';
    element.style.transform = 'rotate(180deg)';
    element.style.translate = '0 0';
  }

  if (splitedPosition === 'bottom') {
    element.style.top = '0';
    element.style.left = '50%';
    element.style.transform = 'rotate(0deg)';
    element.style.translate = '0 -100%';
  }

  if (splitedPosition === 'left') {
    element.style.top = '50%';
    element.style.left = '100%';
    element.style.transform = 'rotate(90deg)';
    element.style.translate = '0 0';
  }

  if (splitedPosition === 'right') {
    element.style.top = '50%';
    element.style.left = '0';
    element.style.transform = 'rotate(-90deg)';
    element.style.translate = '-100% 0';
  }
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((rootProps, rootRef) => {
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
    onTransitionEnd: onRootTransitionEnd,
    onAnimationEnd: onRootAnimationEnd,
    style: rootStyle,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = mergeProps(defaultProps, rootProps);
  const mergedTransitionConfig = mergeProps(defaultProps.transitionConfig, transitionConfig);
  let handlerNode: ReactNode;
  let arrowNode: ReactNode;

  const componentsRef = useRef<{ root: HTMLDivElement | null; handler: HTMLElement | null; arrow: HTMLDivElement | null }>({
    root: null,
    handler: null,
    arrow: null
  });

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(rootRef, () => componentsRef.current.root, []);

  const [cursorY, setCursorY] = useState(-1);
  const [cursorX, setCursorX] = useState(-1);
  const { state: transitionState, enterState, exitState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  const resize = useCallback((): void => {
    if (componentsRef.current.root !== null && componentsRef.current.handler !== null) {
      let newPosition: TooltipPositions;

      if (!followCursor) {
        newPosition = setElementPosition(
          componentsRef.current.root,
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
          componentsRef.current.root,
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

    if ((handler as Record<string, any>)?.ref === undefined || (handler as Record<string, any>).ref === null) {
      handlerNode = cloneElement(handler, {
        onMouseEnter: onHandlerMouseEnter,
        onMouseLeave: onHandlerMouseLeave,
        onMouseMove: onHandlerMouseMove,
        ref: (element: HTMLElement) => {
          componentsRef.current.handler = element;
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

  /* Set root props */
  const rootStyles = styles.root;

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

  const mergedRootClassName = mergeClasses(rootStyles.base, rootStyles.colors[theme][color], rootClassName, transitionClassName);

  const rootChildrenNode = componentsRef.current.root !== null &&
    componentsRef.current.handler !== null &&
    (!unmountOnExit || (unmountOnExit && transitionState !== TransitionStates.EXITED)) && (
      <>
        {arrowNode}
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

Tooltip.displayName = 'Tooltip';

export default Tooltip;
