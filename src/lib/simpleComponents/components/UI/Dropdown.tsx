import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import dropdownConfig from '../../configs/dropdownConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type DropdownVariants = 'plain' | 'filled' | 'outlined';

export interface DropdownProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: DropdownVariants;
  elevated?: boolean;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dropdownConfig.styles;
  const { variant, elevated, className, ...restProps } = { ...dropdownConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], elevated && styles.elevated, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;
