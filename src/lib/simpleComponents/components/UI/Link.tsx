import React, { forwardRef, useContext } from 'react';
import { type LinkProps } from '../../configs/linkConfig';
import { type LinkProps as BaseLinkProps, Link as BaseLink } from 'react-router-dom';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Link = forwardRef<HTMLAnchorElement, LinkProps & BaseLinkProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.link;
  const { underline, color, fullwidth, disabled, className, ...restProps } = setDefaultProps(defaultProps, props);

  /* Set props */
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
