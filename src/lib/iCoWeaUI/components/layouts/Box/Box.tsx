import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import boxConfig from './boxConfig';

export type BoxDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  spacing?: Spacing;
  panel?: boolean;
  border?: Borders;
  block?: boolean;
};

export type BoxProps = BaseHTMLAttributes<HTMLDivElement> &
BoxDefaultProps & {
  disabled?: boolean;
};

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    variant,
    color,
    spacing,
    panel,
    border,
    block,
    disabled,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('box', boxConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = boxConfig.styles;
  const sizeVariant = panel ? 'panel' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    !disabled && color !== 'inherit' && styles.variants[variant][theme][color],
    spacing !== 'none' && styles.spacing[sizeVariant][spacing],
    block && styles.block,
    disabled && styles.disabled[theme],
    disabled && variant !== 'default' && styles.disabledBg[theme],
    border !== 'none' && styles.borders[border],
    border && typeof border === 'boolean' && styles.borders.all,
    defaultClassName,
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Box.displayName = 'Box';

export default Box;
