import React, { type ReactElement, forwardRef } from 'react';
import Dropdown, { type DropdownVariants, type DropdownProps } from './Dropdown';
import Popover, { type PopoverProps } from './Popover';

export interface MenuXProps extends PopoverProps {
  onClose?: () => void;
  variant?: DropdownVariants;
  open?: boolean;
  position?: OuterPositions;
  responsive?: boolean;
  offset?: number;
  lockScroll?: boolean;
  closeOnAwayClick?: boolean;
  keepMounted?: boolean;
  backdrop?: boolean;
  handler?: ReactElement;
  dropdownProps?: DropdownProps;
  overlayRef?: Element | null;
}

const Menu = forwardRef<HTMLDivElement, MenuXProps>((props, ref) => {
  /* --- Set default props --- */
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
    dropdownProps,
    overlayRef,
    children,
    ...restProps
  } = {
    ...props
  };

  return (
    <Popover
      onClose={onClose}
      open={open}
      position={position}
      responsive={responsive}
      offset={offset}
      lockScroll={lockScroll}
      closeOnAwayClick={closeOnAwayClick}
      keepMounted={keepMounted}
      backdrop={backdrop}
      handler={handler}
      overlayRef={overlayRef}
      {...restProps}
      ref={ref}
    >
      <Dropdown
        variant={variant}
        {...dropdownProps}
      >
        {children}
      </Dropdown>
    </Popover>
  );
});

Menu.displayName = 'Menu';

export default Menu;
