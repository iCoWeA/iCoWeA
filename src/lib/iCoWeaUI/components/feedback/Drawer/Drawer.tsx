import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import DrawerContainer, { type DrawerContainerDefaultProps } from './DrawerContainer';
import drawerConfig from './drawerConfig';

export type DrawerDefaultProps = {
  color?: Colors;
  bordered?: boolean;
  position?: Positions;
};

export type DrawerProps = PopperProps &
DrawerDefaultProps & {
  containerProps?: DrawerContainerDefaultProps;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    color,
    bordered,
    position,
    containerProps,
    backdropProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('drawer', drawerConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = drawerConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    defaultClassName,
    className
  );

  /* --- Set backdrop --- */
  const mergedBackdropProps = { invisible: false, ...backdropProps };

  return (
    <Popper
      open={false}
      lockScroll
      closeOnOutsideClick={false}
      closeOnEscape
      closeDuration={-1}
      backdrop
      closeOnBackdropClick
      backdropProps={mergedBackdropProps}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <DrawerContainer
        color={color}
        position={position}
      >
        {children}
      </DrawerContainer>
    </Popper>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
