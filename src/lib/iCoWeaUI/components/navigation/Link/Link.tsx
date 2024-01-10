import React, { type AnchorHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import linkConfig from './linkConfig';

export type LinkDefaultProps = {
  underline?: Underlines;
  color?: TextColors;
  size?: Sizes;
  block?: boolean;
};

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
LinkDefaultProps & {
  disabled?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { underline, color, size, block, disabled, defaultClassName, className, ...restProps } =
    useConfig('link', linkConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = linkConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.underlines[underline],
    styles.sizes[size],
    !disabled && color !== 'inherit' && styles.colors[theme][color],
    disabled && styles.disabled[theme],
    block && styles.block,
    defaultClassName,
    className
  );

  return (
    <a
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Link.displayName = 'Link';

export default Link;
