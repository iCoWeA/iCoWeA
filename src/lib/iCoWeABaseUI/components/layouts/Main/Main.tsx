/* --- ARIA ---
 * aria-labelledby
 */

import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import mainConfig from './mainConfig';

export type MainDefaultProps = {
  placement?: LayoutPlacements;
};

export type MainProps = BaseHTMLAttributes<HTMLElement> & MainDefaultProps;

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { placement, defaultClassName, className, ...restProps } = useConfig(
    'main',
    mainConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = mainConfig.styles;

    return mergeClasses(
      styles.base,
      placement !== 'full' && styles.placements[placement],
      defaultClassName,
      className
    );
  }, [placement, defaultClassName, className]);

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
