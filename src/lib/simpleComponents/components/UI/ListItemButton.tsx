import React, { forwardRef, useContext, type ButtonHTMLAttributes } from 'react';
import { type ListItemButtonVariant } from '../../configs/listItemButtonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface ListItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ListItemButtonVariant;
  size?: Sizes;
  color?: Colors;
  selected?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const ListItemButton = forwardRef<HTMLButtonElement, ListItemButtonProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.listItemButton;
  const { variant, size, color, selected, className, type, ...restProps } = mergeProps(defaultProps, props);

  /* Set props */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
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
