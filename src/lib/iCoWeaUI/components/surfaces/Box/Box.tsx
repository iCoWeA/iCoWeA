import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import boxConfig from './boxConfig';

export type BoxDefaultProps = {
  layout?: ContainerLayouts;
  size?: Sizes;
  inner?: boolean;
  closable?: Closable;
  buttonGap?: Gaps;
};

export type BoxProps = FlexProps & BoxDefaultProps;

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { layout, size, inner, closable, buttonGap, defaultClassName, className, ...restProps } =
    useConfig('box', boxConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = boxConfig.styles;
  const sizeVariant = layout === 'panel' ? 'panel' : 'default';
  const fontSize = inner ? 'inner' : 'default';

  const mergedClassName = mergeClasses(
    layout === 'header' && styles.layouts.header,
    layout === 'footer' && styles.layouts.footer,
    !inner && styles.sizes[sizeVariant][size],
    inner && styles.innerSizes[sizeVariant][size],
    styles.fontSize[fontSize],
    closable !== 'none' && styles.closable,
    closable !== 'none' && styles.gap[size][buttonGap][closable],
    defaultClassName,
    className
  );

  return (
    <Flex
      direction={layout === 'body' ? 'col' : 'row'}
      justify="start"
      align={layout === 'body' ? 'stretch' : 'center'}
      wrap="wrap"
      gap={layout === 'body' ? 'none' : 'base'}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Box.displayName = 'Box';

export default Box;
