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
import menuConfig from '../../configs/menuConfig';
import themeContext from '../../contexts/theme';
import usePrevious from '../../hooks/usePrevious';
import { setElementPosition } from '../../utils/positiontHelper';
import { mergeClasses } from '../../utils/propsHelper';
import Popper, { type PopperProps } from './Popper';

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
export type MenuVariants = 'plain' | 'filled' | 'outlined';

export interface MenuProps extends PopperProps {
  onClose?: () => void;
  variant?: MenuVariants;
  open?: boolean;
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
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = menuConfig.styles;
  const {
    onClose,
    variant,
    open,
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
    ...menuConfig.defaultProps,
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

  /* --- Set props --- */
  const closeHandler = (): void => {
    if (isControlled && onClose !== undefined) {
      onClose();
    }

    if (!isControlled) {
      setIsOpen(false);
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <>
      {handlerNode}
      <Popper
        role="menu"
        onClose={closeHandler}
        onResize={resizeHandler}
        open={open ?? isOpen}
        lockScroll={lockScroll}
        closeOnAwayClick={backdrop ? false : closeOnAwayClick}
        keepMounted={keepMounted}
        anchorElement={handlerRef.current}
        overlayRef={overlayRef}
        tabIndex={-1}
        className={mergedClassName}
        ref={popperRef}
        {...restProps}
      />
    </>
  );
});

Menu.displayName = 'Menu';

export default Menu;
