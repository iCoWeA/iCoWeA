import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import headerConfig from './headerConfig';

export type HeaderContainerDefaultProps = LayoutProps;

export type HeaderContainerProps = HeaderContainerDefaultProps & {
  layout: Layouts;
  variant: Variants;
  color: TextColors;
  bordered: boolean;
};

const HeaderContainer: FC<HeaderContainerProps> = ({ bordered, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = headerConfig.styles.container;

  const mergedClassName = mergeClasses(styles.base, bordered && styles.border, className);

  return (
    <Layout
      bordered={bordered}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default HeaderContainer;
