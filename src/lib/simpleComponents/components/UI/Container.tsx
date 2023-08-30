import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type ContainerVariants } from '../../configs/containerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariants;
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  /* --- Set default props --- */
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.container;
  const { variant, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant], className);

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
