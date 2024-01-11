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
  justify: JustifyContent;
  align: AlignItems;
};

const FooterContainer: FC<FooterContainerProps> = ({
  bordered,
  justify,
  align,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = footerConfig.styles.container;

  const mergedClassName = mergeClasses(
    styles.base,
    justify !== 'start' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    bordered && styles.border,
    className
  );

  return (
    <Layout
      bordered={bordered}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default FooterContainer;
