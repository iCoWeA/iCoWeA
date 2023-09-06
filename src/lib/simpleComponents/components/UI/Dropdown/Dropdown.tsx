import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import dropdownConfig from '../../../configs/dropdownConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface DropdownProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors;
  elevated?: boolean;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dropdownConfig.styles;
  const { color, elevated, className, ...restProps } = { ...dropdownConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], elevated && styles.elevated[theme], className);

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
