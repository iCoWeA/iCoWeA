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
  rootProps?: PopoverProps;
  className?: string;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, rootRef) => {
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
    rootProps,
    className: containerClassName,
    ...restContainerProps
  } = mergeProps(defaultProps, props);

  /* Set root props */
  const {
    open: rootOpen = open,
    position: rootPosition = position,
    overlayRef: rootOverlayRef = overlayRef,
    lockScroll: lockRootScroll = lockScroll,
    handler: rootHandler = handler,
    ...restRootProps
  } = rootProps;

  /* Set contianer props */
  const mergedContainerClassName = mergeClasses(styles.base, styles.colors[theme][color], elevated && styles.elevated[theme], containerClassName);

  return (
    <Popover
      open={rootOpen}
      position={rootPosition}
      overlayRef={rootOverlayRef}
      lockScroll={lockRootScroll}
      handler={rootHandler}
      ref={rootRef}
      {...restRootProps}
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
