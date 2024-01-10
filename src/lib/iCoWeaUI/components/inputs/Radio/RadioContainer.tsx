import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import { mergeClasses } from '../../../utils/utils';
import radioConfig from './radioConfig';

export type RadioContainerDefaultProps = BaseHTMLAttributes<HTMLDivElement>;

export type RadioContainerProps = RadioContainerDefaultProps & {
  size: Sizes;
  noRipple: boolean;
  defaultClassName: string;
  checked?: boolean;
};

const RadioContainer = forwardRef<HTMLDivElement, RadioContainerProps>(
  ({ size, noRipple, checked, defaultClassName, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = radioConfig.styles.root;
    const sizeVariant = noRipple ? 'plain' : 'default';

    const mergedClassName = mergeClasses(
      styles.base,
      styles.sizes[sizeVariant][size],
      checked && styles.checked,
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
  }
);

RadioContainer.displayName = 'RadioContainer';

export default RadioContainer;
