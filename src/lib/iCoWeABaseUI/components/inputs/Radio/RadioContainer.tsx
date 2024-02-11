import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import radioConfig from './radioConfig';

export type RadioContainerDefaultProps = FlexProps;

export type RadioContainerProps = RadioContainerDefaultProps & {
  size: Sizes;
  noRipple: boolean;
  checked?: boolean;
};

const RadioContainer = forwardRef<HTMLDivElement, RadioContainerProps>(
  ({ size, noRipple, checked, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = radioConfig.styles.root;
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

RadioContainer.displayName = 'RadioContainer';

export default RadioContainer;
