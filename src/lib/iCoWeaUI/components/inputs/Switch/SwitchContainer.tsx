import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import { mergeClasses } from '../../../utils/utils';
import switchConfig from './switchConfig';

export type SwitchContainerDefaultProps = BaseHTMLAttributes<HTMLDivElement>;

export type SwitchContainerProps = SwitchContainerDefaultProps & {
  size: Sizes;
  defaultClassName: string;
  checked?: boolean;
};

const SwitchContainer = forwardRef<HTMLDivElement, SwitchContainerProps>(
  ({ size, checked, defaultClassName, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = switchConfig.styles.root;

    const mergedClassName = mergeClasses(
      styles.base,
      styles.sizes[size],
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

SwitchContainer.displayName = 'SwitchContainer';

export default SwitchContainer;
