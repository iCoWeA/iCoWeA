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

export type MarkProps = BaseHTMLAttributes<HTMLSpanElement> & MarkDefaultProps;

const Mark = forwardRef<HTMLSpanElement, MarkProps>((props, ref) => {
  const { variant, color, size, bordered, defaultClassName, className, ...restProps } = useConfig(
    'mark',
    markConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = markConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    color !== 'inherit' && styles.variants[variant][theme][color],
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
