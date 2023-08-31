import React, { forwardRef, useContext, type ButtonHTMLAttributes } from 'react';
import listItemButtonConfig, { type ListItemButtonVariant } from '../../../configs/listItemButtonConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface ListItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ListItemButtonVariant;
  size?: Sizes;
  color?: Colors;
  fullwidth?: boolean;
  selected?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const ListItemButton = forwardRef<HTMLButtonElement, ListItemButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = listItemButtonConfig.styles;
  const { variant, size, color, fullwidth, selected, className, type, ...restProps } = { ...listItemButtonConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    fullwidth && styles.fullwidth,
    !selected && styles.variants[variant][theme][color],
    selected && styles.selected[variant][theme][color],
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

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;