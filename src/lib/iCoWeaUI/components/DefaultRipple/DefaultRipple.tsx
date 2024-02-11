import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../hooks/useTheme';
import { mergeProps, mergeClasses } from '../../utils/utils';
import defaultRippleConfig from './defaultRippleConfig';

export type DefaultRippleDefaultProps = {
  color?: DefaultTextColors;
  border: boolean;
  sibling?: boolean;
};

export type DefaultRippleProps = BaseHTMLAttributes<HTMLSpanElement> & DefaultRippleDefaultProps;

const DefaultRipple = forwardRef<HTMLSpanElement, DefaultRippleProps>((props, ref) => {
  const { color, border, sibling, className, ...restProps } = mergeProps(
    defaultRippleConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = defaultRippleConfig.styles;
    const sizeVariant = sibling ? 'sibling' : 'parent';

    return mergeClasses(
      styles.base,
      border && styles.border[sizeVariant],
      styles.colors[sizeVariant][theme][color],
      className
    );
  }, [sibling, border, theme, color, className]);

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

DefaultRipple.displayName = 'DefaultRipple';

export default DefaultRipple;
