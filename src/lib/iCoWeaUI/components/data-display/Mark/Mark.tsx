import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import markConfig from './markConfig';

export type MarkDefaultProps = {
  size?: Sizes;
  color?: TextColors;
  bg?: TextColors;
};

export type MarkProps = BaseHTMLAttributes<HTMLSpanElement> & MarkDefaultProps;

const Mark = forwardRef<HTMLSpanElement, MarkProps>((props, ref) => {
  const { size, color, bg, defaultClassName, className, ...restProps } = useConfig(
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
    color !== 'inherit' && styles.colors[theme][color],
    bg !== 'inherit' && styles.bg[theme][bg],
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
