import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import spinnerConfig from './spinnerConfig';

export type SpinnerLabelDefaultProps = FlexProps & {
  color?: Colors;
};

export type SpinnerLabelProps = SpinnerLabelDefaultProps & {
  theme: Themes;
  color: Colors;
  size: Sizes;
};

const SpinnerLabel: FC<SpinnerLabelProps> = ({
  theme,
  color,
  size,
  disabled,
  className,
  ...restProps
}) => {
  /* -- Set classes --- */
  const styles = spinnerConfig.styles.label;

  const mergedClassName = mergeClasses(
    styles.base,
    !disabled && styles.colors[theme][color],
    styles.sizes[size],
    className
  );

  return (
    <Flex
      color={color}
      direction="row"
      justify="center"
      align="center"
      wrap="nowrap"
      gap="base"
      disabled={disabled}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default SpinnerLabel;
