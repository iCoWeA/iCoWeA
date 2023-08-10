import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  useContext
} from 'react';
import {
  type ButtonColors,
  type ButtonSizes,
  type ButtonVariants
} from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface ButtonDefaultProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ButtonColors;
  fullwidth?: boolean;
}

export interface ButtonProps
  extends ButtonDefaultProps,
  ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, fullwidth, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.button;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    fullwidth = fullwidth ?? defaultProps.fullwidth;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants[variant][theme][color],
        styles.sizes[size],
        fullwidth && styles.fullwidth,
        className
      )
    );

    return (
      <button
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
