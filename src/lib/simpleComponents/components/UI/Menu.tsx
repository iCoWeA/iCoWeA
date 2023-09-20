import React, { type ReactElement, forwardRef, useRef, useState, useImperativeHandle, useMemo, useEffect } from 'react';
import menuConfig from '../../configs/popoverConfig';
import menuContext from '../../contexts/menu';
import Popover, { type PopoverProps, type PopoverVariants } from './Popover';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-labeledby to menu
 *
 */

export interface MenuProps extends PopoverProps {
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

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  /* --- Set default props --- */
  const { variant, position, responsive, offset, lockScroll, closeOnAwayClick, keepMounted, backdrop, handler, overlayRef, className, children, ...restProps } =
    {
      ...menuConfig.defaultProps,
      ...props
    };

  /* --- Set refs --- */
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const items = useRef<HTMLLIElement[]>([]);
  const currentItem = useRef(0);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => popoverRef.current, []);

  /* --- Set context --- */
  const context = useMemo(
    () => ({
      onUnmount: () => {},
      onMount: () => {},
      onClose: () => {}
    }),
    []
  );

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

  /* --- Set props --- */
  const closeHandler = (): void => {
    setIsOpen(false);
  };

  return (
    <Popover
      role="menu"
      onClose={closeHandler}
      open={isOpen}
      variant={variant}
      position={position}
      responsive={responsive}
      offset={offset}
      lockScroll={lockScroll}
      closeOnAwayClick={closeOnAwayClick}
      keepMounted={keepMounted}
      backdrop={backdrop}
      handler={handler}
      overlayRef={overlayRef}
      ref={popoverRef}
      {...restProps}
    >
      <menuContext.Provider value={context}>{children}</menuContext.Provider>
    </Popover>
  );
});

Menu.displayName = 'Menu';

export default Menu;
