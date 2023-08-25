import React, { forwardRef, type ButtonHTMLAttributes, useContext } from 'react';
import { type ButtonVariants } from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.button;
  const { variant, size, color, elevated, fullwidth, className, type, ...restProps } = mergeProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size],
    elevated && styles.elevated[theme],
    fullwidth && styles.fullwidth,
    className
  );

  return (
    <button
      className={mergedClassName}
      type={type}
      ref={ref}
      {...restProps}
    />
  );
});

Button.displayName = 'Button';

export default Button;
