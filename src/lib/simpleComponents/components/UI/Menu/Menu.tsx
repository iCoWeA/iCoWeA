import React, { type BaseHTMLAttributes, forwardRef, type ReactElement } from 'react';
import Popover, { type PopoverProps } from '../Popover/Popover';
import menuConfig from '../../../configs/menuConfig';
import Dropdown from '../Dropdown/Dropdown';

export interface MenuProps extends BaseHTMLAttributes<HTMLDivElement> {
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
