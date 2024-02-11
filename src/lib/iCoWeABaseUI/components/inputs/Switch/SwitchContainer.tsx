import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import { cutTextColor } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import switchConfig from './switchConfig';

export type SwitchContainerDefaultProps = Omit<FlexProps, 'color'>;

export type SwitchContainerProps = SwitchContainerDefaultProps & {
  theme: Themes;
  size: Sizes;
  color: DefaultTextColors;
  checked?: boolean;
  disabled?: boolean;
};

const SwitchContainer = forwardRef<HTMLDivElement, SwitchContainerProps>(
  ({ theme, size, variant, color, checked, className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const isDefault = color.startsWith('on');

    const mergedClassName = useMemo(() => {
      const styles = switchConfig.styles.root;
      const colorVariant = isDefault ? 'default' : 'solid';

      return mergeClasses(
        styles.base,
        checked && styles.checked,
        styles.sizes[size],
        !checked && styles.color[colorVariant][theme],
        className
      );
    }, [isDefault, checked, size, theme, className]);

    return (
      <Flex
        direction="row"
        wrap="nowrap"
        justify="start"
        align="stretch"
        gap="none"
        position="relative"
        variant={isDefault ? 'plain' : 'solid'}
        color={checked ? cutTextColor(color) : 'inherit'}
        radius="circular"
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

SwitchContainer.displayName = 'SwitchContainer';

export default SwitchContainer;
