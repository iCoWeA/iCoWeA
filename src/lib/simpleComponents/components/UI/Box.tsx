import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import boxConfig from '../../configs/boxConfig';
import { mergeClasses } from '../../utils/utils';

export type BoxVariants = 'row' | 'col' | 'grid' | 'block' | 'layout' | 'sticky-layout' | 'page' | 'dashboard';

export interface BoxProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: BoxVariants;
  size?: Sizes;
}

const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = boxConfig.styles;
  const { variant, size, className, ...restProps } = { ...boxConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.variants[variant], size !== undefined && styles.sizes[size], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Box.displayName = 'Box';

export default Box;
