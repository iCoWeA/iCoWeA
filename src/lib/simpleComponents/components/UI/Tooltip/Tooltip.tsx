import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type TransitionEvent,
  useImperativeHandle,
  useRef,
  type AnimationEvent,
  useEffect,
  useCallback,
  type ReactElement,
  type ReactNode,
  useState
} from 'react';
import useTransition, { TransitionStates, type TransitionConfig } from '../../../hooks/useTransition';
import themeContext from '../../../contexts/theme';
import tooltipConfig from '../../../configs/tooltipConfig';
import { setElementPosition } from '../../../utils/positiontHelper';
import useScroll from '../../../hooks/useScroll';
import useResize from '../../../hooks/useResize';
import { mergeClasses } from '../../../utils/propsHelper';
import TooltipHandler from './TooltipHandler';
import TooltipArrow, { setArrowPosition } from './TooltipArrow';
import { createPortal } from 'react-dom';

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
  handler: ReactElement;
  arrow?: boolean;
  arrowProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface TooltipRefs {
  container: HTMLDivElement | null;
  handler: HTMLElement | null;
  arrow: HTMLDivElement | null;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = tooltipConfig.styles.container;
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
    onTransitionEnd,
    onAnimationEnd,
    style,
    className,
    children,
    ...restProps
  } = { ...tooltipConfig.defaultProps, ...props };
  const mergedTransitionConfig = { ...tooltipConfig.defaultProps.transitionConfig, ...transitionConfig };

  /* --- Set refs --- */
  const componentsRef = useRef<TooltipRefs>({
    container: null,
    handler: null,
    arrow: null
  });

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentsRef.current.container, []);

  /* --- Set states --- */
  const [cursorY, setCursorY] = useState(-1);
  const [cursorX, setCursorX] = useState(-1);

  const { state: transitionState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  /* -- Set open state --- */
  useEffect(() => {
    if (open === true && transitionState.exit) {
      enter();
    }

    if (open === false && transitionState.enter) {
      exit();
    }
  }, [open, transitionState.enter, transitionState.exit]);

  /* --- Set resize action --- */
  const resize = useCallback((): void => {
    let newPosition: Positions;

    if (!followCursor) {
      newPosition = setElementPosition(
        componentsRef.current.container,
        position,
        componentsRef.current.handler?.offsetTop,
        componentsRef.current.handler?.offsetLeft,
        componentsRef.current.handler?.offsetHeight,
        componentsRef.current.handler?.offsetWidth,
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

    if (arrow) {
      setArrowPosition(componentsRef.current.arrow, newPosition);
    }
  }, [followCursor, position, gap, responsive, cursorY, cursorX]);

  useScroll(resize, transitionState.entering);

  useResize(resize, transitionState.entering);

  resize();

  /* --- Set handler props --- */
  const setHandlerRef = (element: HTMLElement): void => {
    const ref = (handler as any).ref;

    if (ref === undefined || ref === null) {
      componentsRef.current.handler = element;
    } else if (typeof ref === 'function') {
      componentsRef.current.handler = element;
      ref(element);
    } else {
      componentsRef.current.handler = element;
      ref.current = element;
    }
  };

  const handlerNode = (
    <TooltipHandler
      enter={enter}
      exit={exit}
      setCursorY={setCursorY}
      setCursorX={setCursorX}
      open={open}
      transitionState={transitionState}
      followCursor={followCursor}
      ref={setHandlerRef}
    >
      {handler}
    </TooltipHandler>
  );

  /* --- Set arrow props --- */
  let arrowNode: ReactNode;

  if (arrow) {
    const setArrowRef = (element: HTMLDivElement): void => {
      componentsRef.current.arrow = element;
    };

    arrowNode = (
      <TooltipArrow
        color={color}
        ref={setArrowRef}
        {...arrowProps}
      />
    );
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentsRef.current.container) {
      enter(true);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentsRef.current.container) {
      exit(true);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (transitionState.current === TransitionStates.ENTERING && event.target === componentsRef.current.container) {
      enter(true);
    }

    if (transitionState.current === TransitionStates.EXITING && event.target === componentsRef.current.container) {
      exit(true);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  const setRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  const mergedStyle = {
    opacity: `${transitionState.entering ? 100 : 0}`,
    transitionDuration: `${transitionState.enter ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`,
    ...style
  };

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className, transitionClassName);

  const childrenNode = componentsRef.current.container !== null &&
    componentsRef.current.handler !== null &&
    (!unmountOnExit || (unmountOnExit && transitionState.current !== TransitionStates.EXITED)) && (
      <>
        {arrowNode}
        {children}
      </>
  );

  let node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
      className={mergedClassName}
      ref={setRef}
      {...restProps}
    >
      {childrenNode}
    </div>
  );

  if (overlayRef !== null) {
    node = createPortal(node, overlayRef);
  }

  return (
    <>
      {handlerNode}
      {node}
    </>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;