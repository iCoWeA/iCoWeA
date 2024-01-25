import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import LinearProgressBar, { type LinearProgressBarDefaultProps } from './LinearProgressBar';
import LinearProgressLabel, { type LinearProgressLabelDefaultProps } from './LinearProgressLabel';
import linearProgressConfig from './linearProgressConfig';

/* --- ARIA ---
 * aria-labelledby
 */

export type LinearProgressDefaultProps = {
  color?: Colors;
  size?: Sizes;
  vertical?: boolean;
  innerBar?: TextColors;
  value?: number | string;
};

export type LinearProgressProps = FlexProps &
LinearProgressDefaultProps & {
  progressBarProps?: LinearProgressBarDefaultProps;
  labelProps?: LinearProgressLabelDefaultProps;
  disabled?: boolean;
};

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>((props, ref) => {
  const {
    color,
    size,
    vertical,
    innerBar,
    progressBarProps,
    labelProps,
    value,
    disabled,
    defaultClassName,
    className,
    children,
    ...restContainerProps
  } = useConfig('linearProgress', linearProgressConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = linearProgressConfig.styles.root;
  const orientation = vertical ? 'vertical' : 'horizontal';

  const mergedClassName = mergeClasses(
    styles.base,
    children ? styles.labelSizes[orientation] : styles.sizes[orientation][size],
    innerBar !== 'inherit' && !disabled && styles.colors[theme][innerBar],
    disabled && styles.disabled[theme],
    defaultClassName,
    className
  );

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      justify="start"
      align="stretch"
      gap="none"
      block
      aria-valuenow={+value}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      className={mergedClassName}
      ref={ref}
      {...restContainerProps}
    >
      <LinearProgressBar
        color={color}
        orientation={orientation}
        value={value}
        disabled={disabled}
        {...progressBarProps}
      >
        {children && (
          <LinearProgressLabel
            color={color}
            vertical={vertical}
            disabled={disabled}
            {...labelProps}
          >
            {children}
          </LinearProgressLabel>
        )}
      </LinearProgressBar>
    </Flex>
  );
});

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;
