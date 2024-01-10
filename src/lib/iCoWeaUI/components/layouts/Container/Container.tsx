import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import containerConfig from './containerConfig';

export type ContainerDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  bordered?: boolean;
  block?: boolean;
};

export type ContainerProps = BaseHTMLAttributes<HTMLDivElement> &
ContainerDefaultProps & {
  disabled?: boolean;
};

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { variant, color, bordered, block, disabled, defaultClassName, className, ...restProps } =
    useConfig('container', containerConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = containerConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    !disabled && color === 'inherit' && styles.inherit,
    !disabled && color !== 'inherit' && styles.variants[variant][theme][color],
    block && styles.block,
    disabled && styles.disabled[theme],
    disabled && variant === 'default' && styles.transparent,
    bordered && styles.border,
    defaultClassName,
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

export default Container;
