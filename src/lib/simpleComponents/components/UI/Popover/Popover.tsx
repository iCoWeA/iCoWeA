import React, {
  type BaseHTMLAttributes,
  type ReactElement,
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
  cloneElement,
  type TransitionEvent,
  type AnimationEvent
} from 'react';
import { createPortal } from 'react-dom';
import popoverConfig from '../../../configs/popoverConfig';
import useAnimation, { AnimationStates } from '../../../hooks/useAnimation';
import useOutsideClick from '../../../hooks/useOutsideClick';
import usePrevious from '../../../hooks/usePrevious';
import useResize from '../../../hooks/useResize';
import useScroll from '../../../hooks/useScroll';
import { setElementPosition } from '../../../utils/positiontHelper';
import { mergeClasses } from '../../../utils/propsHelper';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  onEntering?: () => void;
  onExiting?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  position?: Positions;
  gap?: number;
  responsive?: boolean;
  lockScroll?: boolean;
  unmountOnExit?: boolean;
  backdrop?: boolean;
  overlayRef?: Element | null;
  handler?: ReactElement;
  backdropProps?: BackdropProps;
}

interface PopoverRefs {
  container: HTMLDivElement | null;
  handler: HTMLElement | null;
  backdrop: HTMLDivElement | null;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popoverConfig.styles.popover;
  const {
    onEntering,
    onExiting,
    onEnter,
    onExit,
    open,
    position,
    gap,
    responsive,
    lockScroll,
    unmountOnExit,
    backdrop,
    overlayRef,
    handler,
    backdropProps,
    onTransitionEnd,
    onAnimationEnd,
    className,
    ...restProps
  } = { ...popoverConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const componentsRef = useRef<PopoverRefs>({ container: null, handler: null, backdrop: null });

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentsRef.current.container, []);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);
  const { state: animationState, enter, stopEntering, exit, stopExiting } = useAnimation();

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /* -- Set open state --- */
  useEffect(() => {
    if ((open ?? isOpen) && animationState.exit) {
      enter(onEntering);
    }

    if (!(open ?? isOpen) && animationState.enter) {
      exit(onExiting);
    }
  }, [open, isOpen, animationState.enter, animationState.exit]);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isClickedContainer = componentsRef.current.container?.contains(event.target as Node) ?? false;
    const isClickedHandler = componentsRef.current.handler?.contains(event.target as Node) ?? false;
    const isClickedBackdrop = componentsRef.current.backdrop?.contains(event.target as Node) ?? false;

    if (isClickedHandler) {
      setIsOpen((isOpen) => !isOpen);
    }

    if (isClickedBackdrop) {
      setIsOpen(false);
    }

    if (!isClickedContainer && !isClickedHandler && !isClickedBackdrop) {
      setIsOpen(false);
    }
  }, []);

  useOutsideClick(outsideClickHandler, open === undefined);

  /* --- Set position --- */
  const setPosition = useCallback((): void => {
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
  }, [position, gap, responsive]);

  useScroll(setPosition, animationState.current !== AnimationStates.EXITED);

  useResize(setPosition, animationState.current !== AnimationStates.EXITED);

  setPosition();

  /* --- Set lockScroll state --- */
  useEffect(() => {
    if (lockScroll) {
      if (animationState.current === AnimationStates.EXITED) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [lockScroll, animationState.current]);

  /* --- Set handler props --- */
  let handlerNode: ReactNode;

  if (handler !== undefined) {
    const ref = (handler as any).ref;

    if (ref === undefined || ref === null) {
      const setRef = (element: HTMLElement): void => {
        componentsRef.current.handler = element;
      };

      handlerNode = cloneElement(handler, { ref: setRef });
    } else if (typeof ref === 'function') {
      const setRef = (element: HTMLElement): void => {
        componentsRef.current.handler = element;
        ref(element);
      };

      handlerNode = cloneElement(handler, { ref: setRef });
    } else {
      componentsRef.current.handler = ref.current;
      handlerNode = handler;
    }
  }

  /* --- Unmount --- */
  if (unmountOnExit && !(open ?? isOpen) && animationState.current === AnimationStates.EXITED) {
    return <>{handlerNode}</>;
  }

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    backdropNode = (
      <Backdrop
        open={animationState.enter}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const transitionEndHandler = (event: TransitionEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === componentsRef.current.container) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === componentsRef.current.container) {
      stopExiting(onExit);
    }

    if (onTransitionEnd !== undefined) {
      onTransitionEnd(event);
    }
  };

  const animationEndHandler = (event: AnimationEvent<HTMLDivElement>): void => {
    if (animationState.current === AnimationStates.ENTERING && event.target === componentsRef.current.container) {
      stopEntering(onEnter);
    }

    if (animationState.current === AnimationStates.EXITING && event.target === componentsRef.current.container) {
      stopExiting(onExit);
    }

    if (onAnimationEnd !== undefined) {
      onAnimationEnd(event);
    }
  };

  const setRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  const mergedClassName = mergeClasses(styles.base, animationState.enter && styles.open, className);

  let node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      className={mergedClassName}
      ref={setRef}
      {...restProps}
    />
  );

  if (overlayRef !== null) {
    node = createPortal(node, overlayRef);
  }

  return (
    <>
      {backdropNode}
      {handlerNode}
      {node}
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;
