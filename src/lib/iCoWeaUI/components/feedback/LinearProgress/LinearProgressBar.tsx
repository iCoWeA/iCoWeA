import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressBarDefaultProps = FlexProps & {
  color?: Colors;
};

export type LinearProgressBarProps = LinearProgressBarDefaultProps & {
  theme: Themes;
  variant: Variants;
  color: Colors;
  orientation: Orientations;
  value: number | string;
};

const LinearProgressBar: FC<LinearProgressBarProps> = ({
  theme,
  variant,
  color,
  orientation,
  value,
  style,
  disabled,
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
    !disabled && styles.variants[variant][theme][color],
    className
  );

  return (
    <Flex
      variant="solid"
      color="inherit"
      direction="row"
      wrap="nowrap"
      justify="center"
      align="center"
      gap="none"
      disabled={disabled}
      grow={false}
      style={mergedStyle}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default LinearProgressBar;
