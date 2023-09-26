import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import mainConfig from '../../configs/mainConfig';
import { mergeClasses } from '../../utils/utils';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

export interface MainProps extends BaseHTMLAttributes<HTMLElement> {}

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = mainConfig.styles;
  const { className, ...restProps } = { ...props };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, className);

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
