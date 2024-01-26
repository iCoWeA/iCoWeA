import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import containerConfig from './containerConfig';

export type ContainerDefaultProps = {
  layout?: ContainerLayouts;
  spacing?: Spacing;
  panel?: boolean;
  closable?: Closable;
  closeGap?: Gaps;
};

export type ContainerProps = FlexProps & ContainerDefaultProps;

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { layout, spacing, closable, closeGap, defaultClassName, className, ...restProps } =
    useConfig('container', containerConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = containerConfig.styles;

  const mergedClassName = mergeClasses(
    layout !== 'default' && layout !== 'body' && styles.layouts[layout],
    closable !== 'none' && styles.closable,
    closable !== 'none' && spacing !== 'none' && styles.gap[spacing][closeGap][closable],
    defaultClassName,
    className
  );

  return (
    <Flex
      spacing={spacing}
      direction={layout === 'body' ? 'col' : 'row'}
      wrap="wrap"
      justify="start"
      align={layout === 'body' ? 'stretch' : 'center'}
      gap={layout === 'body' ? 'none' : 'base'}
      grow={false}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

export default Container;
