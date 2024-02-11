/* --- ARIA ---
 * aria-labelledby
 */

import React, { forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import LinearProgressBar, { type LinearProgressBarDefaultProps } from './LinearProgressBar';
import LinearProgressLabel, { type LinearProgressLabelDefaultProps } from './LinearProgressLabel';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressDefaultProps = {
  vertical?: boolean;
  size?: Sizes;
  color?: DefaultTextColors;
  value?: number | string;
};

export type LinearProgressProps = Omit<FlexProps, 'color'> &
LinearProgressDefaultProps & {
  innerBar?: DefaultTextColors;
  progressBarProps?: LinearProgressBarDefaultProps;
  labelProps?: LinearProgressLabelDefaultProps;
  disabled?: boolean;
};

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>((props, ref) => {
  const {
    vertical,
    size,
    color,
    value,
    innerBar,
    progressBarProps,
    labelProps,
    defaultClassName,
    className,
    disabled,
    children,
    ...restContainerProps
  } = useConfig('linearProgress', linearProgressConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = linearProgressConfig.styles.root;
    const orientation = vertical ? 'vertical' : 'horizontal';

    return mergeClasses(
      !disabled && innerBar && styles.colors[theme][innerBar],
      children ? styles.sizes.label[orientation] : styles.sizes.default[orientation][size],
      defaultClassName,
      className
    );
  }, [vertical, !!children, size, disabled, theme, innerBar, defaultClassName, className]);

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      wrap="nowrap"
      justify="start"
      align="stretch"
      gap="none"
      block={!vertical}
      radius="circular"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={+value}
      className={mergedClassName}
      disabled={disabled}
      role="progressbar"
      ref={ref}
      {...restContainerProps}
    >
      <LinearProgressBar
        vertical={vertical}
        color={color}
        value={value}
        disabled={disabled}
        {...progressBarProps}
      >
        {children && (
          <LinearProgressLabel
            vertical={vertical}
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
