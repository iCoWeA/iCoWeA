import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import menuItemConfig from '../../configs/menuItemConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type MenuItemVariants = 'plain' | 'filled';
export type MenuItemTypes = 'button' | 'checkbox' | 'radio';

export interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  variant?: MenuItemVariants;
  type?: MenuItemTypes;
  selected?: boolean;
  color?: Colors;
  disabled?: boolean;
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = menuItemConfig.styles;
  const { variant, type, selected, color, disabled, className, ...restProps } = { ...menuItemConfig.defaultProps, ...props };

  /* --- Set props --- */
  const typeProps: LiHTMLAttributes<HTMLLIElement> = { role: 'menuitem' };

  if (type === 'checkbox' || type === 'radio') {
    typeProps.role = type === 'checkbox' ? 'menuitemcheckbox' : 'menuitemradio';
    typeProps['aria-checked'] = selected;
  }

  const mergedClassName = mergeClasses(styles.base, styles.color[theme], color !== undefined && styles.colors[theme][color], className);

  return (
    <li
      aria-disabled={disabled}
      tabIndex={-1}
      className={mergedClassName}
      ref={ref}
      {...typeProps}
      {...restProps}
    />
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
