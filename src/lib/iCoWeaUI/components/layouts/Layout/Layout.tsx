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
      direction={layout === 'page' ? 'col' : 'row'}
      wrap="wrap"
      justify={layout === 'page' || layout === 'default' ? 'stretch' : 'between'}
      align={layout === 'page' || layout === 'default' ? 'stretch' : 'center'}
      gap={layout === 'page' || layout === 'default' ? 'none' : 'lg'}
      grow={layout === 'default' || layout === 'dashboard'}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Layout.displayName = 'Layout';

export default Layout;
