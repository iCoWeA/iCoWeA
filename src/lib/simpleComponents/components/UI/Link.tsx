import React, { forwardRef, useContext } from 'react';
import { type LinkColors, type LinkUnderlines } from '../../configs/linkConfig';
import {
  type LinkProps as BaseLinkProps,
  Link as BaseLink
} from 'react-router-dom';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface LinkProps extends BaseLinkProps {
  underline?: LinkUnderlines;
  color?: LinkColors;
  fullwidth?: boolean;
  disabled?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ underline, color, fullwidth, disabled, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.link;

    underline = underline ?? defaultProps.underline;
    color = color ?? defaultProps.color;
    fullwidth = fullwidth ?? defaultProps.fullwidth;
    disabled = disabled ?? defaultProps.disabled;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.underlines[underline],
        styles.colors[theme][color],
        fullwidth && styles.fullwidth,
        disabled && styles.disabled,
        className
      )
    );

    return (
      <BaseLink
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Link.displayName = 'Link';

export default Link;
