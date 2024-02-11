import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
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
  const mergedClassName = useMemo(() => {
    const styles = layoutConfig.styles;

    return mergeClasses(styles.layouts[layout], defaultClassName, className);
  }, [layout, defaultClassName, className]);

  return (
    <Flex
      direction={layout === 'root' ? 'col' : 'row'}
      wrap="wrap"
      justify={layout === 'dashboard' || layout === 'fullbleed' ? 'between' : 'stretch'}
      align={layout === 'default' ? 'center' : 'stretch'}
      gap={layout === 'dashboard' || layout === 'fullbleed' ? 'lg' : 'none'}
      block
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Layout.displayName = 'Layout';

export default Layout;
