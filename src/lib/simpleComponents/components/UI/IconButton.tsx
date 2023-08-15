import React, { forwardRef, type ButtonHTMLAttributes, useContext } from 'react';
import { type IconButtonProps } from '../../configs/iconButtonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.iconButton;
  const { variant, size, color, elevated, className, ...restProps } = setDefaultProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], styles.sizes[size], elevated && styles.elevated[theme], className);

  return (
    <button
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
