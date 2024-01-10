import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressBarDefaultProps = FlexProps & {
  color?: Colors;
};

export type LinearProgressBarProps = LinearProgressBarDefaultProps & {
  theme: Themes;
  color: Colors;
  orientation: Orientations;
  value: number | string;
};

const LinearProgressBar: FC<LinearProgressBarProps> = ({
  theme,
  color,
  orientation,
  value,
  disabled,
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
    disabled ? styles.disabled[theme] : styles.colors[theme][color],
    className
  );

  return (
    <Flex
      color={color}
      direction="row"
      justify="center"
      align="center"
      wrap="nowrap"
      gap="none"
      disabled={disabled}
      style={mergedStyle}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressBar;
