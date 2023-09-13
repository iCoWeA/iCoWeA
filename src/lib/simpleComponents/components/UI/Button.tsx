import React, { type ButtonHTMLAttributes, type ReactNode, type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import buttonConfig from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import StateLayer from './StateLayer';

export type ButtonVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles.button;
  const { variant, size, color, elevated, fullwidth, startDecoration, endDecoration, stateLayerProps, className, children, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size],
    variant === 'outlined' && styles.outlineSizes[size],
    elevated && styles.elevated,
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
    >
      {startDecoration}
      {children}
      {endDecoration}
      <StateLayer
        state={`${variant}-click`}
        color={color}
        {...stateLayerProps}
      />
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
