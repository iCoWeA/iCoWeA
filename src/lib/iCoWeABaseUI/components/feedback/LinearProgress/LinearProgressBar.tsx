import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import { cutTextColor } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressBarDefaultProps = Omit<FlexProps, 'color'>;

export type LinearProgressBarProps = LinearProgressBarDefaultProps & {
  vertical: boolean;
  color: TextColors;
  value: number | string;
  disabled?: boolean;
};

const LinearProgressBar: FC<LinearProgressBarProps> = ({
  vertical,
  color,
  value,
  className,
  style,
  ...restProps
}) => {
  /* --- Set styles --- */
  const mergedStyle = vertical
    ? { height: `${value}%`, ...style }
    : { width: `${value}%`, ...style };

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = linearProgressConfig.styles.progressBar;
    const orientation = vertical ? 'vertical' : 'horizontal';

    return mergeClasses(styles.base, styles.orientations[orientation], className);
  }, [vertical, className]);

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="center"
      align="center"
      gap="none"
      position={vertical ? 'relative' : 'static'}
      variant={color.startsWith('on') ? 'plain' : 'solid'}
      color={cutTextColor(color)}
      radius="circular"
      className={mergedClassName}
      style={mergedStyle}
      {...restProps}
    />
  );
};

export default LinearProgressBar;
