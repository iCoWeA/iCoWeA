import React, { type LiHTMLAttributes, forwardRef, useMemo } from 'react';

import { getBorderType, getBorderVariant } from '../../../iCoWeABaseUI/utils/utils';
import useTheme from '../../hooks/useTheme';
import { mergeProps, mergeClasses } from '../../utils/utils';
import defaultListItemConfig from './defaultListItemConfig';

export type DefaultListItemDefaultProps = {
  spacing?: Spacings;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
  radius?: Radiuses;
  col?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: Gaps;
};

export type DefaultListItemProps = LiHTMLAttributes<HTMLLIElement> &
DefaultListItemDefaultProps & {
  disabled?: boolean;
};

const DefaultListItem = forwardRef<HTMLLIElement, DefaultListItemProps>((props, ref) => {
  const {
    spacing,
    variant,
    color,
    border,
    radius,
    col,
    justify,
    align,
    gap,
    className,
    disabled,
    ...restProps
  } = mergeProps(defaultListItemConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes--- */
  const mergedClassName = useMemo(() => {
    const styles = defaultListItemConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      col && styles.col,
      spacing !== 'none' && styles.spacings[spacing],
      borderType !== 'none' && styles.borders[borderType],
      radius !== 'none' && styles.radiuses[radius],
      justify !== 'start' && styles.justifies[justify],
      align !== 'stretch' && styles.aligns[align],
      gap !== 'none' && styles.gaps[gap],
      disabled && color !== 'inherit' && styles.disabled[theme],
      !disabled && color !== 'inherit' && styles.variants[variant][theme][color],
      border &&
        !disabled &&
        color !== 'inherit' &&
        styles.borderVariants[borderVariant][theme][color],
      className
    );
  }, [
    border,
    col,
    spacing,
    radius,
    justify,
    align,
    gap,
    disabled,
    variant,
    theme,
    color,
    className
  ]);

  return (
    <li
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

DefaultListItem.displayName = 'DefaultListItem';

export default DefaultListItem;
