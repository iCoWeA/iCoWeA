/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
import Layout, { type LayoutProps } from '../Layout/Layout';
import headerConfig from './headerConfig';

export type HeaderDefaultProps = {
  position?: Positions;
  block?: boolean;
  variant?: Variants;
  color?: Colors;
  border?: boolean;
  shadow?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: BoxGaps;
};

export type HeaderProps = BaseHTMLAttributes<HTMLElement> &
HeaderDefaultProps & {
  containerProps?: LayoutProps;
};

const Header = forwardRef<HTMLElement, HeaderProps>((props, ref) => {
  const {
    position,
    block,
    variant,
    color,
    border,
    shadow,
    justify,
    align,
    gap,
    containerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('header', headerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = headerConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      border && styles.border,
      shadow && styles.shadow,
      position !== 'static' && styles.positions[position],
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, shadow, position, variant, theme, color, defaultClassName, className]);

  return (
    <header
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <Layout
        layout={block ? 'full' : 'fullbleed'}
        justify={justify}
        align={align}
        gap={gap}
        {...containerProps}
      >
        {children}
      </Layout>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
