import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import spinnerConfig from './spinnerConfig';

export type SpinnerLabelDefaultProps = FlexProps;

export type SpinnerLabelProps = SpinnerLabelDefaultProps & {
  size: Sizes;
};

const SpinnerLabel: FC<SpinnerLabelProps> = ({ size, className, ...restProps }) => {
  /* -- Set classes --- */
  const styles = spinnerConfig.styles.label;

  const mergedClassName = mergeClasses(styles.base, styles.sizes[size], className);

  return (
    <Flex
      justify="center"
      align="center"
      gap="base"
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default SpinnerLabel;
