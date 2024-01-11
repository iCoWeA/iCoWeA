import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import mainConfig from './mainConfig';

export type MainDefaultProps = {
  variant?: Variants;
  color?: Colors;
  bordered?: boolean;
  justify?: JustifyContent;
  align?: AlignItems;
};

export type MainProps = BaseHTMLAttributes<HTMLElement> & MainDefaultProps;

const Main = forwardRef<HTMLElement, MainProps>((props, ref) => {
  const { variant, color, bordered, justify, align, defaultClassName, className, ...restProps } =
    useConfig('main', mainConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = mainConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    justify !== 'start' && styles.justifies[justify],
    align !== 'stretch' && styles.aligns[align],
    bordered && styles.border,
    defaultClassName,
    className
  );

  return (
    <main
      role="main"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Main.displayName = 'Main';

export default Main;
