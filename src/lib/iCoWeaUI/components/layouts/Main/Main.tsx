/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import mainConfig from './mainConfig';

export type MainDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  border?: Borders;
};

export type MainProps = BaseHTMLAttributes<HTMLElement> & MainDefaultProps;

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { variant, color, border, defaultClassName, className, ...restProps } = useConfig(
    'main',
    mainConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = mainConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    color !== 'inherit' && styles.variants[variant][theme][color],
    typeof border === 'string' && border !== 'none' && styles.borders[border],
    typeof border === 'boolean' && border && styles.borders.all,
    defaultClassName,
    className
  );

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
