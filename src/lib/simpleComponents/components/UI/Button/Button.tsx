import React, { type ButtonHTMLAttributes, forwardRef, useContext } from 'react';
import buttonConfig from '../../../configs/buttonConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: Colors;
  fullwidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles;
  const { variant, size, color, fullwidth, className, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size][variant],
    fullwidth && styles.fullwidth,
    className
  );

  return (
    <button
      tabIndex={0}
      className={mergedClassName}
      type="button"
      ref={ref}
      {...restProps}
    />
  );
});

Button.displayName = 'Button';

export default Button;
