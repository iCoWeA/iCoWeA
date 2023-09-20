import React, { type ButtonHTMLAttributes, type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import iconButtonConfig from '../../configs/iconButtonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type IconButtonVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariants;
  borderShape?: Shapes;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = iconButtonConfig.styles;
  const { variant, borderShape, size, color, elevated, stateLayerProps, disabled, className, children, ...restProps } = {
    ...iconButtonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.borderShapes[borderShape],
    styles.sizes[size],
    variant === 'outlined' && styles.outlineSizes[size],
    elevated && styles.elevated,
    className
  );

  return (
    <button
      aria-disabled={disabled}
      className={mergedClassName}
      type="button"
      ref={ref}
      {...restProps}
    >
      {children}
    </button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
