import React, { type LiHTMLAttributes, forwardRef, useContext, useRef, useImperativeHandle, useEffect, type MouseEvent } from 'react';
import menuItemConfig from '../../configs/menuItemConfig';
import menuContext from '../../contexts/menu';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type MenuItemVariants = 'button' | 'checkbox' | 'radio';

export interface MenuItemProps extends LiHTMLAttributes<HTMLLIElement> {
  variant?: MenuItemVariants;
  selected?: boolean;
  color?: Colors;
}

const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;
  const { onMount, onUnmount, onClose } = useContext(menuContext);

  /* --- Set default props --- */
  const styles = menuItemConfig.styles;
  const { onClick, variant, selected, color, disabled, className, ...restProps } = { ...menuItemConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const itemRef = useRef<HTMLLIElement | null>(null);

  /* --- Set imperative anchorElement --- */
  useImperativeHandle<HTMLLIElement | null, HTMLLIElement | null>(ref, () => itemRef.current, []);

  /* --- Set mount props --- */
  useEffect(() => {
    onMount(itemRef.current);

    return () => {
      onUnmount(itemRef.current);
    };
  }, [onMount, onUnmount]);

  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLLIElement>): void => {
    onClose();

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  const variantProps: LiHTMLAttributes<HTMLLIElement> = { role: 'menuitem' };

  if (variant === 'checkbox' || variant === 'radio') {
    variantProps.role = variant === 'checkbox' ? 'menuitemcheckbox' : 'menuitemradio';
    variantProps['aria-checked'] = selected;
  }

  const mergedClassName = mergeClasses(styles.base, styles.color[theme], color !== undefined && styles.colors[theme][color], className);

  return (
    <li
      onClick={clickHandler}
      aria-disabled={disabled}
      tabIndex={-1}
      disabled={disabled}
      className={mergedClassName}
      ref={ref}
      {...variantProps}
      {...restProps}
    />
  );
});

MenuItem.displayName = 'MenuItem';

export default MenuItem;
