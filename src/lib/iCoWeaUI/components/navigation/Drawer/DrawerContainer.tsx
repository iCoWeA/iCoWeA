import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Card, { type CardProps } from '../../surfaces/Card/Card';
import drawerConfig from './drawerConfig';

export type DrawerContainerDefaultProps = CardProps;

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
    <Card
      spacing="none"
      bordered="none"
      shadow={false}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default DraweContainer;
