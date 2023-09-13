import React, { type BaseHTMLAttributes, type FC, useContext, type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import buttonConfig from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Layer
 *
 */
interface LayerProps extends BaseHTMLAttributes<HTMLSpanElement> {
  variant: ButtonVariants;
  color: Colors;
}

const Layer: FC<LayerProps> = ({ variant, color, className, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles.layer;

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

  return (
    <span
      className={mergedClassName}
      {...restProps}
    ></span>
  );
};

/********************************************************************************
 *
 *   Button
 *
 */
export type ButtonVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
  layerProps?: BaseHTMLAttributes<HTMLSpanElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonConfig.styles.button;
  const { variant, size, color, elevated, fullwidth, startDecoration, endDecoration, layerProps, className, children, ...restProps } = {
    ...buttonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], styles.sizes[size], fullwidth && styles.fullwidth, className);

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
      <Layer
        variant={variant}
        color={color}
        {...layerProps}
      />
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
