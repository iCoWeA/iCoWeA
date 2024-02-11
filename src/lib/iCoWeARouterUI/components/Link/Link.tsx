import React, { forwardRef, useMemo } from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

import useTheme from '../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import linkConfig from './linkConfig';

export type LinkDefaultProps = {
  size?: Sizes;
  block?: boolean;
  gutter?: boolean;
  color?: TextColors;
  underline?: Underlines;
  align?: Aligns;
};

export type LinkProps = RouterLinkProps &
LinkDefaultProps & {
  disabled?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    size,
    block,
    gutter,
    color,
    underline,
    align,
    defaultClassName,
    className,
    disabled,
    ...restProps
  } = useConfig('link', linkConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = linkConfig.styles;

    return mergeClasses(
      styles.base,
      block && styles.block,
      gutter && styles.gutter,
      styles.sizes[size],
      styles.underlines[underline],
      align !== 'left' && styles.aligns[align],
      disabled && styles.disabled[theme],
      !disabled && color !== 'inherit' && styles.colors[theme][color],
      defaultClassName,
      className
    );
  }, [block, gutter, size, underline, align, disabled, theme, color, defaultClassName, className]);

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
