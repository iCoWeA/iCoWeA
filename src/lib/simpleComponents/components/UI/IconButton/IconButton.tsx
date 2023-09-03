import React, { forwardRef, type ButtonHTMLAttributes, useContext } from 'react';
import iconButtonConfig, { type IconButtonVariants } from '../../../configs/iconButtonConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = iconButtonConfig.styles;
  const { variant, size, color, elevated, className, type, ...restProps } = { ...iconButtonConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size][variant],
    elevated && styles.elevated[theme],
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

IconButton.displayName = 'IconButton';

export default IconButton;
