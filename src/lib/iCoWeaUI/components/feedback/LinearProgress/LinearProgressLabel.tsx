import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressLabelDefaultProps = FlexProps & {
  color?: Colors;
};

export type LinearProgressLabelProps = LinearProgressLabelDefaultProps & {
  color: Colors;
  vertical: boolean;
};

const LinearProgressLabel: FC<LinearProgressLabelProps> = ({
  vertical,
  className,
  disabled,
  ...restProps
}) => {
  /* -- Set classes --- */
  const styles = linearProgressConfig.styles.label;

  const mergedClassName = mergeClasses(
    styles.base,
    vertical && styles.vertical,
    className
  );

  return (
    <Flex
      variant={disabled ? 'default' : 'solid'}
      justify="center"
      align="center"
      gap="base"
      disabled={disabled}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressLabel;
