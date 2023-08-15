import React, { forwardRef, type ButtonHTMLAttributes, useContext } from 'react';
import { type ButtonProps } from '../../configs/buttonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Button = forwardRef<HTMLButtonElement, ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.button;
  const { variant, size, color, elevated, fullwidth, className, ...restProps } = setDefaultProps(props, defaultProps);

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
      ref={ref}
      {...restProps}
    />
  );
});

Button.displayName = 'Button';

export default Button;
