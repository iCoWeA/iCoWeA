import React, { type LabelHTMLAttributes, type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import labelConfig from './labelConfig';

export type LabelDefauProps = {
  position?: Positions;
  color?: TextColors;
  size?: Sizes;
  align?: AlignItems;
  gap?: Gaps;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
LabelDefauProps & {
  label?: ReactNode;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const {
    position,
    color,
    size,
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
  const styles = labelConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    (position === 'top' || position === 'bottom') && styles.columns,
    color !== 'inherit' && styles.colors[theme][color],
    styles.sizes[size],
    align !== 'stretch' && styles.aligns[align],
    gap !== 'none' && styles.gaps[gap],
    defaultClassName,
    className
  );

  return (
    <label
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {position === 'top' || position === 'left' ? label : children}
      {position === 'top' || position === 'left' ? children : label}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;
