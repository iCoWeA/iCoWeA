import React, { forwardRef, useContext } from 'react';
import { type LinkProps as BaseLinkProps, Link as BaseLink } from 'react-router-dom';
import linkConfig from '../../configs/linkConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface LinkProps extends BaseLinkProps {
  underline?: Underlines;
  color?: Colors;
  disabled?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  /* --- Set dontext props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const { defaultProps, styles } = linkConfig;
  const { underline, color, disabled, className, ...restProps } = { ...defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.underlines[underline],
    !disabled && styles.colors[theme][color],
    disabled && styles.disabled,
    disabled && styles.disabledColor[theme],
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
