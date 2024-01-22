import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressBarDefaultProps = FlexProps & {
  color?: Colors;
};

export type LinearProgressBarProps = LinearProgressBarDefaultProps & {
  color: Colors;
  orientation: Orientations;
  value: number | string;
};

const LinearProgressBar: FC<LinearProgressBarProps> = ({
  orientation,
  value,
  style,
  className,
  ...restProps
}) => {
  /* --- Set styles --- */
  const mergedStyle =
    orientation === 'vertical'
      ? { height: `${value}%`, ...style }
      : { width: `${value}%`, ...style };

  /* --- Set classes --- */
  const styles = linearProgressConfig.styles.progressBar;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.orientations[orientation],
    className
  );

  return (
    <Flex
      variant="solid"
      justify="center"
      align="center"
      gap="none"
      style={mergedStyle}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressBar;
