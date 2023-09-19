import React, { type ReactElement, forwardRef, useContext } from 'react';
import menuConfig from '../../configs/menuConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import Popover, { type PopoverProps } from './Popover';

export type MenuVariants = 'plain' | 'filled' | 'outlined';

export interface MenuXProps extends PopoverProps {
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

const Menu = forwardRef<HTMLDivElement, MenuXProps>((props, ref) => {
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

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], className);

  return (
    <Popover
      role="menu"
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
      className={mergedClassName}
      {...restProps}
      ref={ref}
    />
  );
});

Menu.displayName = 'Menu';

export default Menu;
