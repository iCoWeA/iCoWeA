import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import markConfig from './markConfig';

export type MarkDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  size?: Sizes;
  bordered?: boolean;
};

export type MarkProps = BaseHTMLAttributes<HTMLSpanElement> &
MarkDefaultProps & {
  disabled?: boolean;
};

const Mark = forwardRef<HTMLSpanElement, MarkProps>((props, ref) => {
  const { variant, color, size, bordered, disabled, defaultClassName, className, ...restProps } =
    useConfig('mark', markConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = markConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    color !== 'inherit' && !disabled && styles.variants[variant][theme][color],
    color !== 'inherit' && disabled && styles.disabled[theme],
    disabled && styles.disabled[theme],
    disabled && variant !== 'default' && styles.disabledBg[theme],
    bordered && styles.border,
    defaultClassName,
    className
  );

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Mark.displayName = 'Mark';

export default Mark;
