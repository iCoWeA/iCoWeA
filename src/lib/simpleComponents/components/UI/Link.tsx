import React, { forwardRef, useContext } from 'react';
import { type LinkUnderlines } from '../../configs/linkConfig';
import { type LinkProps as BaseLinkProps, Link as BaseLink } from 'react-router-dom';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface LinkProps extends BaseLinkProps {
  underline?: LinkUnderlines;
  color?: Colors;
  fullwidth?: boolean;
  disabled?: boolean;
  className?: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.link;
  const { underline, color, fullwidth, disabled, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.underlines[underline],
    styles.colors[theme][color],
    fullwidth && styles.fullwidth,
    disabled && styles.disabled,
    className
  );

  return (
    <BaseLink
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Link.displayName = 'Link';

export default Link;
