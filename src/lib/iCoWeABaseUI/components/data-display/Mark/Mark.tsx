import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderVariant } from '../../../utils/utils';
import markConfig from './markConfig';

export type MarkDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: Colors;
  border?: boolean;
};

export type MarkProps = BaseHTMLAttributes<HTMLSpanElement> & MarkDefaultProps;

const Mark = forwardRef<HTMLSpanElement, MarkProps>((props, ref) => {
  const { size, variant, color, border, defaultClassName, className, ...restProps } = useConfig(
    'mark',
    markConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = markConfig.styles;
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      border && styles.border,
      styles.sizes[size],
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' && border && styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, size, variant, theme, color, defaultClassName, className]);

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
