/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import mainConfig from './mainConfig';

export type MainProps = BaseHTMLAttributes<HTMLElement>;

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'main',
    mainConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = mainConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
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
