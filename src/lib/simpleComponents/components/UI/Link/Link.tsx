import React, { forwardRef, useContext } from 'react';
import linkConfig, { type LinkUnderlines } from '../../../configs/linkConfig';
import { type LinkProps as BaseLinkProps, Link as BaseLink } from 'react-router-dom';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface LinkProps extends BaseLinkProps {
  underline?: LinkUnderlines;
  color?: Colors;
  fullwidth?: boolean;
  disabled?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  /* --- Set dontext props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const { defaultProps, styles } = linkConfig;
  const { underline, color, fullwidth, disabled, className, ...restProps } = { ...defaultProps, ...props };

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
