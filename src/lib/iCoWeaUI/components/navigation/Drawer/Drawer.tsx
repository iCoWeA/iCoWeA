import React, { type MutableRefObject, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import { type BackdropProps } from '../../feedback/Backdrop/Backdrop';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import DrawerContainer, { type DrawerContainerDefaultProps } from './DrawerContainer';
import drawerConfig from './drawerConfig';

export type DrawerDefaultProps = {
  variant?: Variants;
  color?: Colors;
  position?: Positions;
  closeOnEscape?: boolean;
  focusTrap?: boolean;
};

export type DrawerProps = Omit<PopperProps, 'variant'> &
DrawerDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  backdropProps?: BackdropProps;
  containerProps?: DrawerContainerDefaultProps;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    variant,
    color,
    position,
    containerProps,
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

  return (
    <Popper
      lockScroll
      closeOnOutsideClick={false}
      closeDuration={-1}
      backdrop
      closeOnBackdropClick
      variant={`slide-${position}`}
      smooth
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <DrawerContainer
        variant={variant}
        color={color}
        position={position}
        {...containerProps}
      >
        {children}
      </DrawerContainer>
    </Popper>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
