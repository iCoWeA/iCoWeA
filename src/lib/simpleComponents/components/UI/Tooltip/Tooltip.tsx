import React, {
  type BaseHTMLAttributes,
  type ReactElement,
  forwardRef,
  useContext,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  type TransitionEvent,
  type AnimationEvent
} from 'react';
import { createPortal } from 'react-dom';
import tooltipConfig from '../../../configs/tooltipConfig';
import themeContext from '../../../contexts/theme';
import useAnimation, { AnimationStates } from '../../../hooks/useAnimation';
import useResize from '../../../hooks/useResize';
import useScroll from '../../../hooks/useScroll';
import { setElementPosition } from '../../../utils/positiontHelper';
import { mergeClasses } from '../../../utils/propsHelper';
import TooltipArrow, { setArrowPosition } from './TooltipArrow';
import TooltipHandler from './TooltipHandler';

export interface TooltipProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  color?: Colors;
  elevated?: boolean;
  position?: Positions;
  gap?: number;
  responsive?: boolean;
  followCursor?: boolean;
  unmountOnExit?: boolean;
  arrow?: boolean;
  overlayRef?: Element | null;
  handler: ReactElement;
  arrowProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = tooltipConfig.styles.container;
  const {
    onEntering,
    onExiting,
    onEnter,
    onExit,
    open,
    color,
    elevated,
    position,
    gap,
    responsive,
    followCursor,
    unmountOnExit,
    arrow,
    overlayRef,
    handler,
    arrowProps,
    className,
    children,
    ...restProps
  } = { ...tooltipConfig.defaultProps, ...props };
  const isControlled = open !== undefined;

  /* --- Set states --- */
  const [cursorY, setCursorY] = useState(-1);
  const [cursorX, setCursorX] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const { state: animationState, enter, stopEntering, exit, stopExiting } = useAnimation();

  /* --- Set refs --- */
  const containerRef = useRef<HTMLDivElement>(null);
  const handlerRef = useRef<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => containerRef.current, [
    unmountOnExit,
    open ?? isOpen,
    animationState.current === AnimationStates.EXITED
  ]);

  /* -- Set open state --- */
  useEffect(() => {
    if ((open ?? isOpen) && animationState.exit) {
      enter(onEntering);
    }

    if (!(open ?? isOpen) && animationState.enter) {
      exit(onExiting);
    }
  }, [open, isOpen, animationState.enter, animationState.exit]);

  /* --- Set position --- */
  const setPosition = useCallback((): void => {
    let newPosition: Positions;

    if (!followCursor) {
      newPosition = setElementPosition(
        containerRef.current,
        position,
        handlerRef.current?.offsetTop,
        handlerRef.current?.offsetLeft,
        handlerRef.current?.offsetHeight,
        handlerRef.current?.offsetWidth,
        gap,
        responsive
      );
    } else {
      newPosition = setElementPosition(
        containerRef.current,
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
      setArrowPosition(arrowRef.current, newPosition);
    }
  }, [followCursor, position, gap, responsive, cursorY, cursorX]);

  useScroll(setPosition, animationState.current !== AnimationStates.EXITED);

  useResize(setPosition, animationState.current !== AnimationStates.EXITED);

  setPosition();

  /* --- Set handler props --- */
  const setHandlerRef = (element: HTMLElement): void => {
    const ref = (handler as any).ref;

    if (ref === undefined || ref === null) {
      handlerRef.current = element;
    } else if (typeof ref === 'function') {
      handlerRef.current = element;
      ref(element);
    } else {
      handlerRef.current = element;
      ref.current = element;
    }
  };

  const handlerNode = (
    <TooltipHandler
      setIsOpen={setIsOpen}
      setCursorY={setCursorY}
      setCursorX={setCursorX}
      isControlled={isControlled}
      isAnimationEnter={animationState.enter}
      followCursor={followCursor}
      ref={setHandlerRef}
    >
      {handler}
    </TooltipHandler>
  );

  /* --- Set arrow props --- */
  let arrowNode: ReactNode;

  if (arrow) {
    arrowNode = (
      <TooltipArrow
        color={color}
        ref={arrowRef}
        {...arrowProps}
      />
    );
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === containerRef.current) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === containerRef.current) {
      stopExiting(onExit);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === containerRef.current) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === containerRef.current) {
      stopExiting(onExit);
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    animationState.enter && styles.open,
    styles.colors[theme][color],
    elevated && styles.elevated[theme],
    className
  );

  let node: ReactNode;

  if (!unmountOnExit || !(unmountOnExit && !(open ?? isOpen) && animationState.current === AnimationStates.EXITED)) {
    node = (
      <div
        onTransitionEnd={transitionEndHandler}
        onAnimationEnd={animationEndHandler}
        className={mergedClassName}
        ref={containerRef}
        {...restProps}
      >
        {arrowNode}
        {children}
      </div>
    );

    if (overlayRef !== null) {
      node = createPortal(node, overlayRef);
    }
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
