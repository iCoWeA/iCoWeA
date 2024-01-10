import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import footerConfig from './footerConfig';

export type FooterContainerDefaultProps = LayoutProps;

export type FooterContainerProps = FooterContainerDefaultProps & {
  layout: Layouts;
  variant: Variants;
  color: TextColors;
  bordered: boolean;
};

const FooterContainer: FC<FooterContainerProps> = ({ bordered, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = footerConfig.styles.container;

  const mergedClassName = mergeClasses(styles.base, bordered && styles.border, className);

  return (
    <Layout
      bordered={bordered}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default FooterContainer;
