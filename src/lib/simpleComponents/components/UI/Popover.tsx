import React, {
  type MouseEventHandler,
  type ReactElement,
  forwardRef,
  cloneElement,
  useRef,
  useState,
  useImperativeHandle,
  useEffect,
  useCallback,
  type ReactNode,
  type MouseEvent
} from 'react';
import popoverConfig from '../../configs/popoverConfig';
import usePrevious from '../../hooks/usePrevious';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses } from '../../utils/propsHelper';
import Backdrop, { type BackdropProps } from './Backdrop';
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

const Handler = forwardRef<HTMLElement, HandlerProps>(({ onClick, open, children }, ref) => cloneElement(children, { onClick, 'aria-expanded': open, ref }));

Handler.displayName = 'Handler';

/********************************************************************************
 *
 *   Popover
 *
 */
export interface PopoverProps extends PopperProps {
  onClose?: () => void;
  open?: boolean;
  position?: OuterPositions;
  responsive?: boolean;
  offset?: number;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  keepMounted?: boolean;
  backdrop?: boolean;
  handler?: ReactElement;
  backdropProps?: BackdropProps;
  overlayRef?: Element | null;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = popoverConfig.styles;
  const {
    onClose,
    open,
    position,
    responsive,
    offset,
    lockScroll,
    closeOnAwayClick,
    keepMounted,
    backdrop,
    handler,
    backdropProps,
    overlayRef,
    id,
    className,
    ...restProps
  } = {
    ...popoverConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement | null>(null);
  const handlerRef = useRef<HTMLElement | null>(null);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);
  const isControlled = open !== undefined;

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

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
      if (!isControlled) {
        setIsOpen((isOpen) => !isOpen);
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
        open={open ?? isOpen}
        keepMounted={keepMounted}
        invisible
        {...backdropProps}
      />
    );
  }

  /* --- Set props --- */
  const closeHandler = (): void => {
    if (isControlled && onClose !== undefined) {
      onClose();
    }

    if (!isControlled) {
      setIsOpen(false);
    }
  };

  console.log(position);

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <>
      {handlerNode}
      {backdropNode}
      <Popper
        onClose={closeHandler}
        onResize={resizeHandler}
        open={open ?? isOpen}
        lockScroll={lockScroll}
        closeOnAwayClick={backdrop ? false : closeOnAwayClick}
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
