import React, {
  type BaseHTMLAttributes,
  forwardRef,
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
import { type BackdropProps } from '../Backdrop/Backdrop';
import popoverConfig from '../../../configs/popoverConfig';
import usePrevious from '../../../hooks/usePrevious';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { setElementPosition } from '../../../utils/positiontHelper';
import useScroll from '../../../hooks/useScroll';
import useResize from '../../../hooks/useResize';
import PopoverHandler from './PopoverHandler';
import PopoverBackdrop from './PopoverBackdrop';
import { mergeClasses } from '../../../utils/propsHelper';
import { createPortal } from 'react-dom';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  position?: Positions;
  gap?: number;
  responsive?: boolean;
  lockScroll?: boolean;
  unmountOnExit?: boolean;
  backdrop?: boolean;
  transitionConfig?: TransitionConfig;
  overlayRef?: Element | null;
  handler?: ReactElement;
  backdropProps?: BackdropProps;
}

interface PopoverRefs {
  container: HTMLDivElement | null;
  handler: HTMLElement | null;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popoverConfig.styles.popover;
  const {
    open,
    position,
    gap,
    responsive,
    lockScroll,
    unmountOnExit,
    backdrop,
    transitionConfig,
    overlayRef,
    handler,
    backdropProps,
    onTransitionEnd,
    onAnimationEnd,
    style,
    className,
    ...restProps
  } = { ...popoverConfig.defaultProps, ...props };
  const mergedTransitionConfig = { ...popoverConfig.defaultProps.transitionConfig, ...transitionConfig };

  /* --- Set refs --- */
  const componentsRef = useRef<PopoverRefs>({ container: null, handler: null });

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentsRef.current.container, []);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);
  const { state: transitionState, className: transitionClassName, enter, exit } = useTransition(mergedTransitionConfig);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /* -- Set open state --- */
  useEffect(() => {
    if (open === undefined) {
      if (isOpen && transitionState.exit) {
        enter();
      }

      if (!isOpen && transitionState.enter) {
        exit();
      }
    } else {
      if (open && transitionState.exit) {
        enter();
      }

      if (!open && transitionState.enter) {
        exit();
      }
    }
  }, [open, isOpen, transitionState.enter, transitionState.exit]);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    if (
      !((componentsRef.current.container?.contains(event.target as Node) ?? false) && (componentsRef.current.handler?.contains(event.target as Node) ?? false))
    ) {
      setIsOpen(false);
    }
  }, []);

  useOutsideClick(outsideClickHandler, transitionState.entering && open === undefined && !backdrop);

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

  useScroll(setPosition, transitionState.entering);

  useResize(setPosition, transitionState.entering);

  setPosition();

  /* --- Set lockScroll state --- */
  useEffect(() => {
    if (lockScroll) {
      if (transitionState.current === TransitionStates.EXITED) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [lockScroll, transitionState.current]);

  /* --- Set handler props --- */
  let handlerNode: ReactNode;

  if (handler !== undefined) {
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

    handlerNode = (
      <PopoverHandler
        setIsOpen={setIsOpen}
        open={open}
        transitionState={transitionState}
        ref={setHandlerRef}
      >
        {handler}
      </PopoverHandler>
    );
  }

  /* --- Unmount --- */
  if (unmountOnExit && transitionState.current === TransitionStates.EXITED && !(open ?? isOpen)) {
    return <>{handlerNode}</>;
  }

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    const mergedBackdropProps = { ...popoverConfig.defaultProps.backdropProps, ...backdropProps };

    backdropNode = (
      <PopoverBackdrop
        setIsOpen={setIsOpen}
        transitionState={transitionState}
        enterDuration={mergedTransitionConfig.enterDuration}
        exitDuration={mergedTransitionConfig.exitDuration}
        open={open}
        {...mergedBackdropProps}
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
    transitionDuration: `${transitionState.entering ? mergedTransitionConfig.enterDuration : mergedTransitionConfig.exitDuration}ms`,
    ...style
  };

  const mergedClassName = mergeClasses(styles.base, transitionState.entering && styles.open, className, transitionClassName);

  let node = (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      style={mergedStyle}
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
