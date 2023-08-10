import React, {
  forwardRef,
  useContext,
  type ButtonHTMLAttributes
} from 'react';
import {
  type ListItemButtonSizes,
  type ListItemButtonColors,
  type ListItemButtonVariant
} from '../../configs/listItemButtonConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface ListItemButtonDefaultProps {
  variant?: ListItemButtonVariant;
  size?: ListItemButtonSizes;
  color?: ListItemButtonColors;
  selected?: boolean;
}

export interface ListItemButtonProps
  extends ListItemButtonDefaultProps,
  ButtonHTMLAttributes<HTMLButtonElement> {}

const ListItemButton = forwardRef<HTMLButtonElement, ListItemButtonProps>(
  ({ variant, size, color, selected, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.listItemButton;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    selected = selected ?? defaultProps.selected;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.sizes[size],
        !selected && styles.variants[variant][theme][color],
        selected && styles.selected[variant][theme][color],
        className
      )
    );

    return (
      <button
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
