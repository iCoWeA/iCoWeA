import React, { type ReactElement, forwardRef } from 'react';
import menuConfig from '../../../configs/menuConfig';
import Dropdown, { type DropdownProps } from '../Dropdown/Dropdown';
import Popover, { type PopoverProps } from '../Popover/Popover';

export interface MenuProps extends DropdownProps {
  color?: Colors;
  elevated?: boolean;
  open?: boolean;
  position?: Positions;
  lockScroll?: boolean;
  overlayRef?: Element | null;
  handler?: ReactElement;
  popoverProps?: PopoverProps;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  /* --- Set default props --- */
  const { color, elevated, open, position, lockScroll, overlayRef, handler, popoverProps, ...restProps } = {
    ...menuConfig.defaultProps,
    ...props
  };

  return (
    <Popover
      open={open}
      position={position}
      lockScroll={lockScroll}
      overlayRef={overlayRef}
      handler={handler}
      {...popoverProps}
      ref={ref}
    >
      <Dropdown
        color={color}
        elevated={elevated}
        {...restProps}
      />
    </Popover>
  );
});

Menu.displayName = 'Menu';

export default Menu;
