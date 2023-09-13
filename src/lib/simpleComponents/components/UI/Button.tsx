import React, { type ButtonHTMLAttributes, forwardRef, useContext, type ReactNode } from 'react';
import buttonConfig from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type ButtonVariants = 'plain' | 'text' | 'outlined' | 'filled';

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
  const { button: buttonStyles, layer: layerStyles } = buttonConfig.styles;
  const { variant, size, color, elevated, fullwidth, startDecoration, endDecoration, className, children, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    buttonStyles.base,
    buttonStyles.variants[variant][theme][color],
    buttonStyles.sizes[size],
    fullwidth && buttonStyles.fullwidth,
    layerStyles.base,
    layerStyles.variants[variant][theme][color],
    elevated && buttonStyles.elevated,
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
