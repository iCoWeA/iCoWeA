import React, { forwardRef, useContext, type ButtonHTMLAttributes } from 'react';
import { type ListItemButtonColors, type ListItemButtonSizes, type ListItemButtonVariant } from '../../configs/listItemButtonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface ListItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ListItemButtonVariant;
  size?: ListItemButtonSizes;
  color?: ListItemButtonColors;
  selected?: boolean;
  className?: string;
}

const ListItemButton = forwardRef<HTMLButtonElement, ListItemButtonProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.listItemButton;
  const { variant, size, color, selected, className, ...restProps } = setDefaultProps(props, defaultProps);

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
      ref={ref}
      {...restProps}
    />
  );
});

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
