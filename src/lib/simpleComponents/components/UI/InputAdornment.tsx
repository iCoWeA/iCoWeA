import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import { type InputAdornmentColor } from '../../configs/inputAdornmentConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface InputAdornmentDefaultProps {
  color?: InputAdornmentColor;
}

export interface InputAdornmentProps
  extends InputAdornmentDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>(
  ({ color, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.inputAdornment;

    color = color ?? defaultProps.color;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, styles.colors[theme][color], className)
    );

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

InputAdornment.displayName = 'InputAdornment';

export default InputAdornment;
