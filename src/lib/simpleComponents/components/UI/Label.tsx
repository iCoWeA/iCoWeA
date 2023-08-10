import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import { type LabelColors } from '../../configs/labelConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface LabelDefaultProps {
  color?: LabelColors;
}

export interface LabelProps
  extends LabelDefaultProps,
  LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ color, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.label;

    color = color ?? defaultProps.color;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, styles.colors[theme][color], className)
    );

    return (
      <label
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Label.displayName = 'Label';

export default Label;
