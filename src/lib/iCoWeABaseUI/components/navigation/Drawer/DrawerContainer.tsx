import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import drawerConfig from './drawerConfig';

export type DrawerContainerDefaultProps = StackProps & {
  color?: DefaultColors;
};

export type DrawerContainerProps = DrawerContainerDefaultProps & {
  placement: Placements;
  spacing: PanelSpacings;
  variant: Variants;
  color: DefaultColors;
  radius: Radiuses;
  justify: JustifyContent;
  align: AlignItems;
  gap: BoxGaps;
};

const DraweContainer: FC<DrawerContainerProps> = ({
  placement,
  radius,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = drawerConfig.styles.container;
    const orientation = placement === 'bottom' || placement === 'top' ? 'horizontal' : 'vertical';

    return mergeClasses(
      styles.orientations[orientation],
      radius !== 'none' && styles.radiuses[placement][radius],
      className
    );
  }, [placement, radius, className]);

  return (
    <Stack
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default DraweContainer;
