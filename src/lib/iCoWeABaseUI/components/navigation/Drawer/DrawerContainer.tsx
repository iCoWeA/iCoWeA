import React, { type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import drawerConfig from './drawerConfig';

export type DrawerContainerDefaultProps = StackProps & {
  color?: Colors;
};

export type DrawerContainerProps = DrawerContainerDefaultProps & {
  variant: Variants;
  color: Colors;
  position: Positions;
};

const DraweContainer: FC<DrawerContainerProps> = ({ position, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = drawerConfig.styles.container;

  const mergedClassName = mergeClasses(styles.positions[position], className);

  return (
    <Stack
      justify="start"
      align="stretch"
      gap="none"
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default DraweContainer;
