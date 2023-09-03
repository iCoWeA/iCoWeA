import React, { forwardRef, useContext, type ButtonHTMLAttributes, type LiHTMLAttributes, type MutableRefObject } from 'react';
import listItemButtonConfig, { type ListItemButtonVariant } from '../../../configs/listItemButtonConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import ListItemButtonContainer from './ListItemButtonContainer';

export interface ListItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ListItemButtonVariant;
  size?: Sizes;
  color?: Colors;
  fullwidth?: boolean;
  selected?: boolean;
  itemProps?: LiHTMLAttributes<HTMLLIElement>;
  buttonRef?: MutableRefObject<HTMLButtonElement> | null;
}

const ListItemButton = forwardRef<HTMLLIElement, ListItemButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = listItemButtonConfig.styles.button;
  const { variant, size, color, fullwidth, selected, itemProps, buttonRef, className, type, ...restProps } = { ...listItemButtonConfig.defaultProps, ...props };

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
    <ListItemButtonContainer
      {...itemProps}
      ref={ref}
    >
      <button
        className={mergedClassName}
        type={type}
        ref={buttonRef}
        {...restProps}
      />
    </ListItemButtonContainer>
  );
});

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
