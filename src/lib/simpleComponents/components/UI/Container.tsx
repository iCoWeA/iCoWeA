import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type ContainerVariants } from '../../configs/containerConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ContainerVariants;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ variant, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.container;

    variant = variant ?? defaultProps.variant;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, styles.variants[variant], className)
    );

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Container.displayName = 'Container';

export default Container;
