import React, {
  type ReactElement,
  forwardRef,
  cloneElement,
  type BaseHTMLAttributes,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback,
  type ReactNode
} from 'react';
import popoverConfig from '../../configs/popoverConfig';
import useAnimation, { AnimationStates } from '../../hooks/useAnimation';
import useOutsideClick from '../../hooks/useOutsideClick';
import usePrevious from '../../hooks/usePrevious';
import useResize from '../../hooks/useResize';
import useScroll from '../../hooks/useScroll';
import { setElementPosition } from '../../utils/positiontHelper';
import { setStyles, mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';

/********************************************************************************
 *
 *   Handler
 *
 */
interface HandlerProps {
  onClick: () => void;
  children: ReactElement;
}

const Handler = forwardRef<HTMLElement, HandlerProps>(({ onClick, children }, ref) => cloneElement(children, { onClick, ref }));

Handler.displayName = 'Handler';

export interface PopoverProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  onEnter?: () => void;
  onExit?: () => void;
  open?: boolean;
  position?: OuterPositions;
  offset?: number;
  responsive?: boolean;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  closeDuration?: number;
  unmountOnExit?: boolean;
  backdrop?: boolean;
  handler?: ReactElement;
  backdropProps?: BackdropProps;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popoverConfig.styles;
  const {
    onClose,
    onEnter,
    onExit,
    open,
    position,
    offset,
    responsive,
    lockScroll,
    closeOnAwayClick,
    closeDuration,
    unmountOnExit,
    backdrop,
    handler,
    backdropProps,
    style,
    className,
    children,
    ...restProps
  } = {
    ...popoverConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const popoverRef = useRef<HTMLDivElement>(null);
  const handlerRef = useRef<HTMLElement | null>(null);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);
  const {
    state: animationState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useAnimation<HTMLDivElement>(popoverRef.current, false, onEnter, onExit);
  const isControlled = open !== undefined;

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popoverRef.current, [
    unmountOnExit && !(open ?? isOpen) && animationState.current === AnimationStates.EXITED
  ]);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /*
   * Set open state
   */
  useEffect(() => {
    if ((open ?? isOpen) && animationState.exit) {
      enter();
    }

    if (!(open ?? isOpen) && animationState.enter) {
      exit();
    }
  }, [open, isOpen, animationState.enter, animationState.exit]);

  /*
   * Set outside click action
   */
  const outsideClickHandler = useCallback(
    (event: MouseEvent) => {
      const isPopoverClicked = popoverRef.current?.contains(event.target as Node) ?? false;
      const isHandlerClicked = handlerRef.current?.contains(event.target as Node) ?? false;

      if (!isPopoverClicked && !isHandlerClicked) {
        if (isControlled && onClose !== undefined) {
          onClose();
        }

        if (!isControlled) {
          setIsOpen(false);
        }
      }
    },
    [isControlled]
  );

  useOutsideClick(outsideClickHandler, closeOnAwayClick && animationState.enter && !backdrop);

  /*
   * Set timer action
   */
  useEffect(() => {
    let timerId: number;

    if (animationState.current === AnimationStates.ENTERED && closeDuration !== undefined) {
      timerId = window.setTimeout(() => {
        if (isControlled && onClose !== undefined) {
          onClose();
        }

        if (!isControlled) {
          setIsOpen(false);
        }
      }, closeDuration);
    }

    return () => {
      if (animationState.current === AnimationStates.ENTERED && closeDuration !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [animationState.current, closeDuration, isControlled]);

  /*
   * Set lock scroll action
   */
  useEffect(() => {
    if (lockScroll) {
      if (animationState.current === AnimationStates.EXITED) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  }, [lockScroll, animationState.current]);

  /*
   * Set resize action
   */
  const setPosition = useCallback((): void => {
    setElementPosition(
      popoverRef.current,
      position,
      handlerRef.current?.offsetTop,
      handlerRef.current?.offsetLeft,
      handlerRef.current?.offsetHeight,
      handlerRef.current?.offsetWidth,
      offset,
      responsive
    );
  }, [position, offset, responsive]);

  useScroll(setPosition, responsive && animationState.current !== AnimationStates.EXITED);

  useResize(setPosition, responsive && animationState.current !== AnimationStates.EXITED);

  useEffect(() => {
    if (animationState.current !== AnimationStates.EXITED) {
      setPosition();
    }
  }, [animationState.current, setPosition]);

  /*
   * Set styles
   */
  useEffect(() => {
    if (animationState.current === AnimationStates.ENTERING) {
      setStyles<HTMLDivElement>(popoverRef.current, { opacity: '100', ...style });
    }

    if (animationState.current === AnimationStates.EXITING) {
      setStyles<HTMLDivElement>(popoverRef.current, { opacity: '0', ...style });
    }
  }, [animationState.current, style]);

  /* --- Set handler props --- */
  let handlerNode: ReactNode;

  if (handler !== undefined) {
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

    let clickHandler = handler.props.onClick;

    if (!isControlled) {
      clickHandler = () => {
        setIsOpen((isOpen) => !isOpen);
      };
    }

    handlerNode = (
      <Handler
        onClick={clickHandler}
        ref={setHandlerRef}
      >
        {handler}
      </Handler>
    );
  }

  /* --- Unmount --- */
  if (unmountOnExit && !(open ?? isOpen) && animationState.current === AnimationStates.EXITED) {
    return <>{handlerNode}</>;
  }

  /* --- Set backdrop --- */
  let backdropNode: ReactNode;

  if (backdrop) {
    const closeHandler = (): void => {
      if (isControlled && onClose !== undefined) {
        onClose();
      }

      if (!isControlled) {
        setIsOpen(false);
      }
    };

    backdropNode = (
      <Backdrop
        onClose={closeHandler}
        // invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <>
      {handlerNode}
      {backdropNode}
      <div
        onTransitionEnd={transitionEndHandler}
        onAnimationEnd={animationEndHandler}
        className={mergedClassName}
        ref={popoverRef}
        {...restProps}
      >
        {children}
      </div>
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;

/* ON_CLOSE() IS NOT IN DEPENDENCY LIST !!! */
