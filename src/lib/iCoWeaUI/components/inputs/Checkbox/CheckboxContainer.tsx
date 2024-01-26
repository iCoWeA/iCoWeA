import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import { mergeClasses } from '../../../utils/utils';
import checkboxConfig from './checkboxConfig';

export type CheckboxContainerDefaultProps = BaseHTMLAttributes<HTMLDivElement>;

export type CheckboxContainerProps = CheckboxContainerDefaultProps & {
  size: Sizes;
  noRipple: boolean;
  checked?: boolean;
  defaultClassName: string;
};

const CheckboxContainer = forwardRef<HTMLDivElement, CheckboxContainerProps>(
  ({ size, noRipple, checked, defaultClassName, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = checkboxConfig.styles.root;
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

CheckboxContainer.displayName = 'CheckboxContainer';

export default CheckboxContainer;