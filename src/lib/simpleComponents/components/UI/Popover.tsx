import React, {
  type MouseEventHandler,
  type ReactElement,
  forwardRef,
  cloneElement,
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type MouseEvent
} from 'react';
import popoverConfig from '../../configs/popoverConfig';
import usePrevious from '../../hooks/usePrevious';
import Backdrop, { type BackdropProps } from './Backdrop';
import Popper, { type PopperProps } from './Popper';

/********************************************************************************
 *
 *   Handler
 *
 */
interface HandlerProps {
  onClick: MouseEventHandler<HTMLElement>;
  children: ReactElement;
}

const Handler = forwardRef<HTMLElement, HandlerProps>(({ onClick, children }, ref) => cloneElement(children, { onClick, ref }));

Handler.displayName = 'Handler';

export interface PopoverProps extends PopperProps {
  onClose?: () => void;
  open?: boolean;
  position?: OuterPositions;
  responsive?: boolean;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  keepMounted?: boolean;
  backdrop?: boolean;
  handler?: ReactElement;
  backdropProps?: BackdropProps;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  /* --- Set default props --- */
  const { onClose, open, position, responsive, lockScroll, closeOnAwayClick, keepMounted, backdrop, handler, backdropProps, ...restProps } = {
    ...popoverConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const handlerRef = useRef<HTMLElement | null>(null);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);
  const isControlled = open !== undefined;

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

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

  return (
    <>
      {handlerNode}
      {backdropNode}
      <Popper
        onClose={closeHandler}
        open={open ?? isOpen}
        position={position}
        responsive={responsive}
        lockScroll={lockScroll}
        closeOnAwayClick={backdrop ? false : closeOnAwayClick}
        keepMounted={keepMounted}
        anchorElement={handlerRef.current}
        ref={ref}
        {...restProps}
      />
    </>
  );
});

Popover.displayName = 'Popover';

export default Popover;
