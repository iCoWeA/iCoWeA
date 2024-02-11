import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { cutPanelSize } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import containerConfig from './containerConfig';

export type ContainerDefaultProps = {
  spacing?: PanelSpacings;
  layout?: ContainerLayouts;
  closable?: Closable;
};

export type ContainerProps = FlexProps &
ContainerDefaultProps & {
  buttonGap?: Gaps;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { spacing, layout, closable, gap, buttonGap, defaultClassName, className, ...restProps } =
    useConfig('container', containerConfig.defaultProps, props);

  /* --- Set classes --- */
  const gapVariant = gap ?? (layout === 'body' ? 'none' : 'base');

  const mergedClassName = useMemo(() => {
    const styles = containerConfig.styles;
    const spacingVariant = cutPanelSize(spacing);

    return mergeClasses(
      layout !== 'default' && layout !== 'body' && styles.layouts[layout],
      closable !== 'none' &&
        spacingVariant !== 'none' &&
        styles.gap[spacingVariant][buttonGap ?? gapVariant][closable],
      defaultClassName,
      className
    );
  }, [spacing, layout, closable, buttonGap, gapVariant, defaultClassName, className]);

  return (
    <Flex
      direction={layout === 'body' ? 'col' : 'row'}
      wrap="wrap"
      justify="start"
      align={layout === 'body' ? 'stretch' : 'center'}
      gap={gapVariant}
      spacing={spacing}
      position={closable === 'none' ? 'static' : 'relative'}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

export default Container;
