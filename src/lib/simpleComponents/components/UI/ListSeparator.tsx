import React, { type LiHTMLAttributes, forwardRef, useContext } from 'react';
import listSeparatorConfig from '../../configs/listSeparatorConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type ListSeparatorVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface ListSeparatorProps extends LiHTMLAttributes<HTMLLIElement> {
  orientation?: Orientations;
  variant?: ListSeparatorVariants;
  color?: Colors;
  fullwidth?: boolean;
  disabled?: boolean;
}

const ListSeparator = forwardRef<HTMLLIElement, ListSeparatorProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = listSeparatorConfig.styles;
  const { orientation, variant, color, fullwidth, disabled, className, ...restProps } = { ...listSeparatorConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.after,
    styles.orientations[orientation],
    fullwidth && styles.fullwidthOrientations[orientation],
    color === undefined ? styles.color[theme] : styles.variants[variant][theme][color],
    disabled && styles.disabled[theme],
    className
  );

  return (
    <li
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListSeparator.displayName = 'ListSeparator';

export default ListSeparator;
