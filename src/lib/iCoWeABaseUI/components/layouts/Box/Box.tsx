import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
import boxConfig from './boxConfig';

export type BoxDefaultProps = {
  position?: Positions;
  block?: boolean;
  spacing?: PanelSpacings;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
  radius?: Radiuses;
  shadow?: boolean;
};

export type BoxProps = BaseHTMLAttributes<HTMLDivElement> &
BoxDefaultProps & {
  disabled?: boolean;
};

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    position,
    block,
    spacing,
    variant,
    color,
    border,
    radius,
    shadow,
    defaultClassName,
    className,
    disabled,
    ...restProps
  } = useConfig('box', boxConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = boxConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      block && styles.block,
      shadow && styles.shadow,
      position !== 'static' && styles.positions[position],
      borderType !== 'none' && styles.borders[borderType],
      radius !== 'none' && styles.radiuses[radius],
      spacing !== 'none' && styles.spacing[spacing],
      disabled && styles.disabled[theme],
      !disabled && color !== 'inherit' && styles.variants[variant][theme][color],
      !disabled &&
        color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [
    border,
    block,
    shadow,
    position,
    radius,
    spacing,
    disabled,
    variant,
    theme,
    color,
    defaultClassName,
    className
  ]);

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
