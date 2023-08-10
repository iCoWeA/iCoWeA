import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import {
  type InputAdornmentColor,
  type InputAdornmentPositions
} from '../../configs/inputAdornmentConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface InputAdornmentDefaultProps {
  position?: InputAdornmentPositions;
  color?: InputAdornmentColor;
}

export interface InputAdornmentProps
  extends InputAdornmentDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>(
  ({ position, color, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.inputAdornment;

    position = position ?? defaultProps.position;
    color = color ?? defaultProps.color;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.positions[position],
        styles.colors[theme][color],
        className
      )
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
