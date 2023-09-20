import React, {
  type MouseEventHandler,
  type ReactElement,
  forwardRef,
  cloneElement,
  useRef,
  useState,
  useImperativeHandle,
  useMemo,
  useCallback,
  useEffect,
  type ReactNode,
  type MouseEvent
} from 'react';
import menuConfig from '../../configs/menuConfig';
import menuContext from '../../contexts/menu';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps, type PopperVariants } from './Popper';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-labeledby to menu
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
 *   Menu
 *
 */
export interface MenuProps extends PopperProps {
  variant?: PopperVariants;
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

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = menuConfig.styles;
  const { variant, position, responsive, offset, lockScroll, closeOnAwayClick, keepMounted, backdrop, handler, overlayRef, className, children, ...restProps } =
    {
      ...menuConfig.defaultProps,
      ...props
    };

  /* --- Set refs --- */
  const popperRef = useRef<HTMLDivElement | null>(null);
  const handlerRef = useRef<HTMLElement | null>(null);
  const items = useRef<HTMLLIElement[]>([]);
  const currentItem = useRef(0);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popperRef.current, []);

  /* --- Set context --- */
  const context = useMemo(
    () => ({
      onUnmount: () => {},
      onMount: () => {},
      onClose: () => {}
    }),
    []
  );

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

  /* --- Set key down action --- */
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowDown' && !isOpen) {
        currentItem.current = 0;
        setIsOpen(true);
      }

      if (event.key === 'ArrowDown' && isOpen && items.current.length !== 0) {
        currentItem.current = currentItem.current + 1 === items.current.length ? 0 : currentItem.current + 1;
        items.current[currentItem.current].focus();
      }

      if (event.key === 'ArrowUp' && !isOpen) {
        setIsOpen(true);
        currentItem.current = items.current.length - 1;
      }

      if (event.key === 'ArrowUp' && isOpen && items.current.length !== 0) {
        currentItem.current = currentItem.current === 0 ? items.current.length - 1 : currentItem.current - 1;
      }

      if (event.key === 'Home' && isOpen && items.current.length !== 0) {
        currentItem.current = 0;
        items.current[currentItem.current].focus();
      }

      if (event.key === 'End' && isOpen && items.current.length !== 0) {
        currentItem.current = items.current.length - 1;
        items.current[currentItem.current].focus();
      }

      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [isOpen]);

  /* --- Set focus action --- */
  useEffect(() => {
    if (!isOpen) {
      currentItem.current = 0;
    }

    if (isOpen && items.current[currentItem.current] !== undefined) {
      items.current[currentItem.current].focus();
    }
  }, [isOpen]);

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
      setIsOpen((isOpen) => !isOpen);

      if (handler.props.onClick !== undefined) {
        handler.props.onClick(event);
      }
    };

    handlerNode = (
      <Handler
        onClick={clickHandler}
        open={isOpen}
        ref={setHandlerRef}
      >
        {handler}
      </Handler>
    );
  }

  /* --- Set props --- */
  const closeHandler = (): void => {
    setIsOpen(false);
  };

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <>
      {handlerNode}
      <Popper
        role="menu"
        onClose={closeHandler}
        onResize={resizeHandler}
        variant={variant}
        open={isOpen}
        lockScroll={lockScroll}
        closeOnAwayClick={backdrop ? false : closeOnAwayClick}
        keepMounted={keepMounted}
        anchorElement={handlerRef.current}
        overlayRef={overlayRef}
        tabIndex={-1}
        className={mergedClassName}
        ref={popperRef}
        {...restProps}
      >
        <menuContext.Provider value={context}>{children}</menuContext.Provider>
      </Popper>
    </>
  );
});

Menu.displayName = 'Menu';

export default Menu;
