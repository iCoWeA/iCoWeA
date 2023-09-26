import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import mainConfig from '../../configs/mainConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface MainProps extends BaseHTMLAttributes<HTMLElement> {
  variant?: Variants;
  color?: Colors;
}

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = mainConfig.styles;
  const { variant, color, className, ...restProps } = { ...mainConfig.defaultProps, ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

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
