import React, { type BaseHTMLAttributes, forwardRef, type ReactElement } from 'react';
import Popover, { type PopoverProps } from '../Popover/Popover';
import menuConfig from '../../../configs/menuConfig';
import MenuContainer from './MenuContainer';

export interface MenuProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors;
  elevated?: boolean;
  open?: boolean;
  position?: Positions;
  overlayRef?: Element | null;
  lockScroll?: boolean;
  handler?: ReactElement;
  popoverProps?: PopoverProps;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  /* --- Set default props --- */
  const { color, elevated, open, position, overlayRef, lockScroll, handler, popoverProps, ...restContainerProps } = {
    ...menuConfig.defaultProps,
    ...props
  };

  return (
    <Popover
      open={open}
      position={position}
      overlayRef={overlayRef}
      lockScroll={lockScroll}
      handler={handler}
      {...popoverProps}
      ref={ref}
    >
      <MenuContainer
        color={color}
        elevated={elevated}
        {...restContainerProps}
      />
    </Popover>
  );
});

Menu.displayName = 'Menu';

export default Menu;
