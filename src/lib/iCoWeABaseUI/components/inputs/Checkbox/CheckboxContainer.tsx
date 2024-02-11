import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import checkboxConfig from './checkboxConfig';

export type CheckboxContainerDefaultProps = FlexProps;

export type CheckboxContainerProps = CheckboxContainerDefaultProps & {
  size: Sizes;
  noRipple: boolean;
  checked?: boolean;
};

const CheckboxContainer = forwardRef<HTMLDivElement, CheckboxContainerProps>(
  ({ size, noRipple, checked, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = checkboxConfig.styles.root;
      const sizeVariant = noRipple ? 'plain' : 'default';

      return mergeClasses(
        styles.base,
        checked && styles.checked,
        styles.sizes[sizeVariant][size],
        className
      );
    }, [noRipple, checked, size, className]);

    return (
      <Flex
        direction="row"
        wrap="nowrap"
        justify="start"
        align="stretch"
        gap="none"
        position="relative"
        radius="circular"
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

CheckboxContainer.displayName = 'CheckboxContainer';

export default CheckboxContainer;
