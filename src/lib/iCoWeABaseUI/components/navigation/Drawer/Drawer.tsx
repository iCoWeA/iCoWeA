import React, { type MutableRefObject, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Popper, { type PopperProps } from '../../utils/Popper/Popper';
import DrawerContainer, { type DrawerContainerDefaultProps } from './DrawerContainer';
import drawerConfig from './drawerConfig';

export type DrawerDefaultProps = {
  placement?: Placements;
  spacing?: PanelSpacings;
  variant?: Variants;
  color?: DefaultColors;
  radius?: Radiuses;
  closeOnEscape?: boolean;
  focusTrap?: boolean;
  smooth?: boolean;
  backdrop?: Backdrop;
};

export type DrawerProps = PopperProps &
DrawerDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  containerProps?: DrawerContainerDefaultProps;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    placement,
    spacing,
    variant,
    color,
    radius,
    backdrop,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('drawer', drawerConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = drawerConfig.styles.root;

    return mergeClasses(styles.base, styles.placements[placement], defaultClassName, className);
  }, [placement, defaultClassName, className]);

  return (
    <Popper
      lockScroll
      closeOnOutsideClick={backdrop === 'none'}
      closeDuration={-1}
      closeOnBackdropClick
      backdrop={backdrop}
      transition={`slide-${placement}`}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <DrawerContainer
        placement={placement}
        spacing={spacing}
        variant={variant}
        color={color}
        radius={radius}
        {...containerProps}
      >
        {children}
      </DrawerContainer>
    </Popper>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
