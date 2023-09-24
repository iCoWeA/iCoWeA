import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import containerConfig from '../../configs/containerConfig';
import { mergeClasses } from '../../utils/utils';

export interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: Layouts;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = containerConfig.styles;
  const { variant, className, ...restProps } = { ...containerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.variants[variant], className);

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
