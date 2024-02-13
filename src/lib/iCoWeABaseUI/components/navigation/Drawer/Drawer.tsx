import React, { type MutableRefObject, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import DrawerPopper, { type DrawerPopperDefaultProps } from './DrawerPopper';
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

export type DrawerProps = StackProps &
DrawerDefaultProps & {
  onClose?: ((state: boolean) => void) | ((state?: boolean) => void);
  open?: boolean;
  portalTarget?: Element | null;
  anchorRef?: MutableRefObject<HTMLElement | null>;
  popperProps?: DrawerPopperDefaultProps;
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    onClose,
    placement,
    radius,
    closeOnEscape,
    focusTrap,
    smooth,
    backdrop,
    open,
    portalTarget,
    anchorRef,
    popperProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('drawer', drawerConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = drawerConfig.styles.container;
    const orientation = placement === 'bottom' || placement === 'top' ? 'horizontal' : 'vertical';

    return mergeClasses(
      styles.orientations[orientation],
      radius !== 'none' && styles.radiuses[placement][radius],
      defaultClassName,
      className
    );
  }, [placement, radius, defaultClassName, className]);

  return (
    <DrawerPopper
      onClose={onClose}
      placement={placement}
      closeOnEscape={closeOnEscape}
      focusTrap={focusTrap}
      smooth={smooth}
      backdrop={backdrop}
      open={open}
      portalTarget={portalTarget}
      anchorRef={anchorRef}
      ref={ref}
      {...popperProps}
    >
      <Stack
        justify="start"
        align="stretch"
        gap="none"
        className={mergedClassName}
        {...restProps}
      >
        {children}
      </Stack>
    </DrawerPopper>
  );
});

Drawer.displayName = 'Drawer';

export default Drawer;
