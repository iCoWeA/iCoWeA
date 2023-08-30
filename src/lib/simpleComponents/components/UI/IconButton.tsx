import React, { forwardRef, type ButtonHTMLAttributes, useContext } from 'react';
import { type IconButtonVariants } from '../../configs/iconButtonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.iconButton;
  const { variant, size, color, elevated, className, type, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], styles.sizes[size], elevated && styles.elevated[theme], className);

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
