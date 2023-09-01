import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../../contexts/theme';
import menuConfig from '../../../configs/menuConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface MenuContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  color: Colors;
  elevated: boolean;
}

const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>(({ color, elevated, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = menuConfig.styles;

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

MenuContainer.displayName = 'MenuContainer';

export default MenuContainer;
