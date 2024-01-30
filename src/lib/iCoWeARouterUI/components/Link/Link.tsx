import React, { forwardRef } from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

import useTheme from '../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import linkConfig from './linkConfig';

export type LinkDefaultProps = {
  color?: TextColors;
  size?: Sizes;
  align?: Aligns;
  underline?: Underlines;
  block?: boolean;
  gutter?: boolean;
};

export type LinkProps = RouterLinkProps &
LinkDefaultProps & {
  disabled?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    color,
    size,
    align,
    underline,
    block,
    gutter,
    disabled,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('link', linkConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = linkConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.underlines[underline],
    styles.sizes[size],
    align !== 'left' && styles.aligns[align],
    !disabled && color !== 'inherit' && styles.colors[theme][color],
    disabled && styles.disabled[theme],
    block && styles.block,
    gutter && styles.gutter,
    defaultClassName,
    className
  );

  return (
    <RouterLink
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Link.displayName = 'Link';

export default Link;
