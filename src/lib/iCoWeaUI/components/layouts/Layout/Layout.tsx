import React, { forwardRef } from 'react';
import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../Flex/Flex';
import layoutConfig from './layoutConfig';

export type LayoutDefaultProps = {
  layout?: Layouts;
};

export type LayoutProps = FlexProps & LayoutDefaultProps;

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
    <Flex
      direction={layout === 'root' ? 'col' : 'row'}
      wrap="wrap"
      justify={layout === 'dashboard' || layout === 'fullbleed' ? 'between' : 'stretch'}
      align={layout === 'default' ? 'center' : 'stretch'}
      gap={layout === 'dashboard' || layout === 'fullbleed' ? 'lg' : 'none'}
      grow={layout === 'default' || layout === 'standard' || layout === 'dashboard'}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Layout.displayName = 'Layout';

export default Layout;
