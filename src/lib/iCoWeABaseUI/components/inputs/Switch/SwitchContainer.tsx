import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import switchConfig from './switchConfig';

export type SwitchContainerDefaultProps = FlexProps & {
  color?: Colors;
};

export type SwitchContainerProps = SwitchContainerDefaultProps & {
  theme: Themes;
  color: Colors;
  size: Sizes;
  checked?: boolean;
};

const SwitchContainer = forwardRef<HTMLDivElement, SwitchContainerProps>(
  ({ theme, size, checked, disabled, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = switchConfig.styles.root;

    const mergedClassName = mergeClasses(
      styles.base,
      styles.sizes[size],
      !checked && !disabled && styles.color[theme],
      !checked && disabled && styles.disabled[theme],
      checked && styles.checked,
      className
    );

    return (
      <Flex
        variant="solid"
        spacing="none"
        direction="row"
        wrap="nowrap"
        justify="stretch"
        align="stretch"
        gap="none"
        grow={false}
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
