import React, {
  type MouseEventHandler,
  type ReactElement,
  forwardRef,
  cloneElement,
  useContext,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback,
  type ReactNode,
  type MouseEvent
} from 'react';
import popoverConfig from '../../configs/popoverConfig';
import themeContext from '../../contexts/theme';
import usePrevious from '../../hooks/usePrevious';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps } from './Popper';

/* ARIA
 *
 * Set aria-controls to handler
 *
 */

/********************************************************************************
 *
 *   Handler
 *
 */
interface HandlerProps {
  onClick: MouseEventHandler<HTMLElement>;
  open: boolean;
  children: ReactElement;
}

const Handler = forwardRef<HTMLElement, HandlerProps>(({ onClick, open, children }, ref) =>
  cloneElement(children, { onClick, 'aria-expanded': open, 'aria-haspopup': true, ref })
);

Handler.displayName = 'Handler';

/********************************************************************************
 *
 *   Popover
 *
 */
export type PopoverVariants = 'plain' | 'filled' | 'outlined';

export interface PopoverProps extends PopperProps {
  onClose?: () => void;
  open?: boolean;
  variant?: PopoverVariants;
  position?: OuterPositions;
  responsive?: boolean;
  offset?: number;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  keepMounted?: boolean;
  backdrop?: boolean;
  handler?: ReactElement;
  overlayRef?: Element | null;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = popoverConfig.styles;
  const {
    onClose,
    open,
    variant,
    position,
    responsive,
    offset,
    lockScroll,
    closeOnAwayClick,
    keepMounted,
    backdrop,
    handler,
    overlayRef,
    className,
    ...restProps
  } = {
    ...popoverConfig.defaultProps,
    ...props
  };
  const isControlled = open !== undefined;

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement | null>(null);
  const handlerRef = useRef<HTMLElement | null>(null);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        handlerRef.current?.focus();
        setIsOpen(false);
      }
    };

    if (!isControlled) {
      document.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      if (!isControlled) {
        document.removeEventListener('keydown', keyDownHandler);
      }
    };
  }, [isOpen, isControlled]);

  /* --- Set position action --- */
  const resizeHandler = useCallback(() => {
    setElementPosition(
      popperRef.current,
      position,
      handlerRef.current?.offsetTop,
      handlerRef.current?.offsetLeft,
      handlerRef.current?.offsetHeight,
      handlerRef.current?.offsetWidth,
      offset,
      responsive
    );
  }, [position, offset, responsive]);

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

    const clickHandler = (event: MouseEvent<HTMLElement>): void => {
      if (isControlled && onClose !== undefined) {
        onClose();
      }

      if (!isControlled) {
        setIsOpen(false);
      }

      if (handler.props.onClick !== undefined) {
        handler.props.onClick(event);
      }
    };

    handlerNode = (
      <Handler
        onClick={clickHandler}
        open={open ?? isOpen}
        ref={setHandlerRef}
      >
        {handler}
      </Handler>
    );
  }

  /* --- Set props --- */
  let closeHandler = onClose;

  if (!isControlled) {
    closeHandler = () => {
      setIsOpen(false);
    };
  }

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <>
      {handlerNode}
      <Popper
        onClose={closeHandler}
        onResize={resizeHandler}
        open={open ?? isOpen}
        lockScroll={lockScroll}
        closeOnAwayClick={closeOnAwayClick}
        keepMounted={keepMounted}
        anchorElement={handlerRef.current}
        overlayRef={overlayRef}
        className={mergedClassName}
        ref={popperRef}
        {...restProps}
      />
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;
