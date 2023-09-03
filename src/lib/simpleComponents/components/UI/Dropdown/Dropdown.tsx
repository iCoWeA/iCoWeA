import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../../contexts/theme';
import dropdownConfig from '../../../configs/dropdownConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface DropdownContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  color: Colors;
  elevated: boolean;
}

const DropdownContainer = forwardRef<HTMLDivElement, DropdownContainerProps>(({ color, elevated, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dropdownConfig.styles;

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

DropdownContainer.displayName = 'DropdownContainer';

export default DropdownContainer;
