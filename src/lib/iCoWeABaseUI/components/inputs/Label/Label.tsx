import React, { type LabelHTMLAttributes, type ReactNode, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import labelConfig from './labelConfig';

export type LabelDefauProps = {
  placement?: Placements;
  size?: Sizes;
  color?: TextColors;
  align?: AlignItems;
  gap?: Gaps;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
LabelDefauProps & {
  label?: ReactNode;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {
    placement,
    size,
    color,
    align,
    gap,
    label,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('label', labelConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = labelConfig.styles;

    return mergeClasses(
      styles.base,
      (placement === 'top' || placement === 'bottom') && styles.columns,
      styles.sizes[size],
      align !== 'stretch' && styles.aligns[align],
      gap !== 'none' && styles.gaps[gap],
      color !== 'inherit' && styles.colors[theme][color],
      defaultClassName,
      className
    );
  }, [placement, size, align, gap, theme, color, defaultClassName, className]);

  return (
    <label
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {placement === 'top' || placement === 'left' ? label : children}
      {placement === 'top' || placement === 'left' ? children : label}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;
