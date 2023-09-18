import React, { type LiHTMLAttributes, forwardRef, type ButtonHTMLAttributes, useContext } from 'react';
import listItemButtonConfig from '../../configs/listItemButtonConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends LiHTMLAttributes<HTMLLIElement> {
  fullwidth: boolean;
}

const Container = forwardRef<HTMLLIElement, ContainerProps>(({ fullwidth, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = listItemButtonConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, fullwidth && styles.fullwidth, className);

  return (
    <li
      className={mergedClassName}
      {...restProps}
      ref={ref}
    />
  );
});

Container.displayName = 'Container';

/********************************************************************************
 *
 *   List Item Button
 *
 */
export type ListItemButtonVariants = 'text' | 'filled';

export interface ListItemButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ListItemButtonVariants;
  color?: Colors;
  fullwidth?: boolean;
  selected?: boolean;
  itemProps?: LiHTMLAttributes<HTMLLIElement>;
}

const ListItemButton = forwardRef<HTMLLIElement, ListItemButtonProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = listItemButtonConfig.styles.button;
  const { variant, color, fullwidth, selected, itemProps, className, ...restProps } = { ...listItemButtonConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    fullwidth && styles.fullwidth,
    !selected && styles.variants[variant][theme],
    selected && styles.selected[variant][theme][color],
    className
  );

  return (
    <Container
      fullwidth={fullwidth}
      {...itemProps}
      ref={ref}
    >
      <button
        className={mergedClassName}
        type="button"
        {...restProps}
      />
    </Container>
  );
});

ListItemButton.displayName = 'ListItemButton';

export default ListItemButton;
