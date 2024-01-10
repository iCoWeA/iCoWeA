import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Container, { type ContainerProps } from '../Container/Container';
import layoutConfig from './layoutConfig';

export type LayoutDefaultProps = {
  layout?: Layouts;
};

export type LayoutProps = ContainerProps & LayoutDefaultProps;

const Layout = forwardRef<HTMLDivElement, LayoutProps>((props, ref) => {
  const { layout, defaultClassName, className, ...restProps } = useConfig(
    'layout',
    layoutConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = layoutConfig.styles;

  const mergedClassName = mergeClasses(
    styles.layouts[layout],
    defaultClassName,
    className
  );

  return (
    <Container
      variant="plain"
      color="neutral"
      bordered={false}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Layout.displayName = 'Layout';

export default Layout;
