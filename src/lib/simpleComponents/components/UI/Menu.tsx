/* import React, { type MutableRefObject, forwardRef, useState, useEffect } from 'react';
import menuConfig from '../../configs/menuConfig';
import usePrevious from '../../hooks/usePrevious';
import Popover, { type PopoverProps, type PopoverVariants } from './Popover';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-labeledby to menu
 *

export interface MenuProps extends PopoverProps {
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
  anchorRef?: MutableRefObject<HTMLElement | null>;
  overlayRef?: Element | null;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  /* --- Set default props ---
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
    anchorRef,
    overlayRef,
    className,
    ...restProps
  } = {
    ...menuConfig.defaultProps,
    ...props
  };
  const isControlled = open !== undefined;

  /* --- Set refs ---
  // const currentItem = useRef<HTMLElement | null>(null);

  /* --- Set states ---
  const [isOpen, setIsOpen] = useState(false);
  const setIsFocused = useState(false)[1];

  /* --- Set previous values  ---
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /* --- Set key down action ---
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      /* if (event.key === 'ArrowDown' && !isOpen) {
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

  /* --- Set handler props ---
  useEffect(() => {
    if (anchorRef?.current !== undefined && anchorRef?.current !== null) {
      const clickHandler = (): void => {
        if (isControlled) {
          if (open) {
            anchorRef?.current?.focus();
            setIsFocused(false);
          } else {
            setIsFocused(true);
          }
        }

        if (!isControlled) {
          setIsOpen((prevOpen) => {
            if (prevOpen) {
              console.log('focus');
              anchorRef?.current?.focus();
              setIsFocused(false);

              return false;
            }

            setIsFocused(true);

            return true;
          });
        }
      };

      anchorRef.current.onclick = clickHandler;
    }
  }, []);

  /* --- Set props ---
  const closeHandler = (): void => {
    setIsFocused(false);

    if (isControlled && onClose !== undefined) {
      onClose();
    }

    if (!isControlled) {
      setIsOpen(false);
    }
  };

  return (
    <Popover
      role="menu"
      open={isOpen}
      onClose={closeHandler}
      variant={variant}
      position={position}
      responsive={responsive}
      offset={offset}
      lockScroll={lockScroll}
      closeOnAwayClick={closeOnAwayClick}
      keepMounted={keepMounted}
      backdrop={backdrop}
      anchorElement={anchorRef?.current}
      overlayRef={overlayRef}
      ref={ref}
      {...restProps}
    />
  );
});

Menu.displayName = 'Menu';

export default Menu; */
