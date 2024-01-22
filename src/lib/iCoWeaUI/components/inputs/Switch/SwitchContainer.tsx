import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import switchConfig from './switchConfig';

export type SwitchContainerDefaultProps = FlexProps & {
  color?: Colors;
};

export type SwitchContainerProps = SwitchContainerDefaultProps & {
  theme: Themes;
  color: Colors;
  size: Sizes;
  defaultClassName: string;
  checked?: boolean;
};

const SwitchContainer = forwardRef<HTMLDivElement, SwitchContainerProps>(
  ({ theme, size, checked, disabled, defaultClassName, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = switchConfig.styles.root;

    const mergedClassName = mergeClasses(
      styles.base,
      styles.sizes[size],
      !checked && !disabled && styles.color[theme],
      !checked && disabled && styles.disabled[theme],
      checked && styles.checked,
      defaultClassName,
      className
    );

    return (
      <Flex
        variant="solid"
        spacing="none"
        justify="stretch"
        align="stretch"
        gap="none"
        disabled={disabled}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

SwitchContainer.displayName = 'SwitchContainer';

export default SwitchContainer;
