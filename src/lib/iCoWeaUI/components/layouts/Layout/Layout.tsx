import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Box, { type BoxProps } from '../Box/Box';
import layoutConfig from './layoutConfig';

export type LayoutDefaultProps = {
  layout?: Layouts;
  panel?: boolean;
};

export type LayoutProps = BoxProps & LayoutDefaultProps;

const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { layout, defaultClassName, className, ...restProps } = useConfig(
    'layout',
    layoutConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = layoutConfig.styles;

  const mergedClassName = mergeClasses(styles.layouts[layout], defaultClassName, className);

  return (
    <Box
      variant="default"
      color="inherit"
      spacing="none"
      bordered="none"
      direction={layout === 'default' ? 'col' : 'row'}
      wrap="wrap"
      justify={layout === 'default' || layout === 'standard' ? 'stretch' : 'between'}
      align={layout === 'default' || layout === 'standard' ? 'stretch' : 'center'}
      gap={layout === 'default' || layout === 'standard' ? 'none' : 'lg'}
      grow={layout === 'standard' || layout === 'dashboard'}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Layout.displayName = 'Layout';

export default Layout;
