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
      justify={
        layout === 'root' || layout === 'default' || layout === 'standard' ? 'stretch' : 'between'
      }
      align={layout === 'root' || layout === 'standard' ? 'stretch' : 'center'}
      gap={layout === 'root' || layout === 'default' || layout === 'standard' ? 'none' : 'lg'}
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
