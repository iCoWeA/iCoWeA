/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderType, getBorderVariant } from '../../../utils/utils';
import mainConfig from './mainConfig';

export type MainDefaultProps = {
  block?: boolean;
  variant?: Variants;
  color?: Colors;
  border?: Borders;
};

export type MainProps = BaseHTMLAttributes<HTMLElement> & MainDefaultProps;

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { block, variant, color, border, defaultClassName, className, ...restProps } = useConfig(
    'main',
    mainConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = mainConfig.styles;
    const borderType = getBorderType(border);
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      !block && styles.block,
      borderType !== 'none' && styles.borders[borderType],
      color !== 'inherit' && styles.variants[variant][theme][color],
      color !== 'inherit' &&
        borderType !== 'none' &&
        styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [border, block, variant, theme, color, defaultClassName, className]);

  return (
    <main
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Main.displayName = 'Main';

export default Main;
