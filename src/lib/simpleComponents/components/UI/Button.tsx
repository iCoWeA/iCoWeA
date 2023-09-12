import React, { type ButtonHTMLAttributes, forwardRef, useContext, type ReactNode } from 'react';
import buttonConfig from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type ButtonVariants = 'plain' | 'text' | 'outlined' | 'soft' | 'solid';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles;
  const { variant, size, color, elevated, fullwidth, startDecoration, endDecoration, className, children, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.button.base,
    styles.button.variants[variant][theme][color],
    styles.button.sizes[size],
    fullwidth && styles.button.fullwidth,
    styles.before.base,
    styles.before.variants[variant][theme][color],
    elevated && styles.button.elevated[theme],
    className
  );

  return (
    <button
      tabIndex={0}
      className={mergedClassName}
      type="button"
      ref={ref}
      {...restProps}
    >
      {startDecoration}
      {children}
      {endDecoration}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
