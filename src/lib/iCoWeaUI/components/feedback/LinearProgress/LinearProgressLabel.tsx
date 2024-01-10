import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressLabelDefaultProps = FlexProps & {
  color?: Colors;
};

export type LinearProgressLabelProps = LinearProgressLabelDefaultProps & {
  theme: Themes;
  color: Colors;
  vertical: boolean;
};

const LinearProgressLabel: FC<LinearProgressLabelProps> = ({
  theme,
  color,
  vertical,
  disabled,
  className,
  ...restProps
}) => {
  /* -- Set classes --- */
  const styles = linearProgressConfig.styles.label;

  const mergedClassName = mergeClasses(
    styles.base,
    vertical && styles.vertical,
    !disabled && styles.colors[theme][color],
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

export default LinearProgressLabel;
