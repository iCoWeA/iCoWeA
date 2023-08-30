import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactElement } from 'react';
import Popover, { type PopoverProps } from './Popover';
import { type PopoverPositions } from '../../configs/popoverConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface MenuProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors;
  elevated?: boolean;
  open?: boolean;
  position?: PopoverPositions;
  overlayRef?: Element | null;
  lockScroll?: boolean;
  handler?: ReactElement;
  popoverProps?: PopoverProps;
  className?: string;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, popoverRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.menu;
  const {
    color,
    elevated,
    open,
    position,
    overlayRef,
    lockScroll,
    handler,
    popoverProps,
    className: containerClassName,
    ...restContainerProps
  } = mergeProps(defaultProps, props);

  /* Set popover props */
  const {
    open: popoverOpen = open,
    position: popoverPosition = position,
    overlayRef: popoverOverlayRef = overlayRef,
    lockScroll: lockPopoverScroll = lockScroll,
    handler: popoverHandler = handler,
    ...restPopoverProps
  } = popoverProps;

  /* Set contianer props */
  const mergedContainerClassName = mergeClasses(styles.base, styles.colors[theme][color], elevated && styles.elevated[theme], containerClassName);

  return (
    <Popover
      open={popoverOpen}
      position={popoverPosition}
      overlayRef={popoverOverlayRef}
      lockScroll={lockPopoverScroll}
      handler={popoverHandler}
      ref={popoverRef}
      {...restPopoverProps}
    >
      <div
        className={mergedContainerClassName}
        {...restContainerProps}
      />
    </Popover>
  );
});

Menu.displayName = 'Menu';

export default Menu;
