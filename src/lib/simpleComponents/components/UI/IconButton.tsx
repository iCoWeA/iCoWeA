import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  useContext
} from 'react';
import {
  type IconButtonColors,
  type IconButtonSizes,
  type IconButtonVariants
} from '../../configs/iconButtonConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface IconButtonDefaultProps {
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  color?: IconButtonColors;
  elevated?: boolean;
}

export interface IconButtonProps
  extends IconButtonDefaultProps,
  ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, size, color, elevated, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.iconButton;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    elevated = elevated ?? defaultProps.elevated;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants[variant][theme][color],
        styles.sizes[size],
        elevated && styles.elevated[theme],
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

IconButton.displayName = 'IconButton';

export default IconButton;
