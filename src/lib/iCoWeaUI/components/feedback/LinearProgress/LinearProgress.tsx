/* ARIA
 *
 * Set aria-labeledby
 *
 */

import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import LinearProgressBar, { type LinearProgressBarDefaultProps } from './LinearProgressBar';
import LinearProgressLabel, { type LinearProgressLabelDefaultProps } from './LinearProgressLabel';
import linearProgressConfig from './linearProgressConfig';

export type LinearProgressDefaultProps = {
  color?: Colors;
  size?: Sizes;
  inner?: boolean;
  vertical?: boolean;
  innerBar?: TextColors;
  value?: number | string;
};

export type LinearProgressProps = BaseHTMLAttributes<HTMLDivElement> &
LinearProgressDefaultProps & {
  progressBarProps?: LinearProgressBarDefaultProps;
  labelProps?: LinearProgressLabelDefaultProps;
  disabled?: boolean;
};

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>((props, ref) => {
  const {
    color,
    size,
    inner,
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
    styles.orientations[orientation],
    !children && !inner && styles.sizes[orientation][size],
    !children && inner && styles.innerSizes[orientation],
    !!children && styles.labelSizes[orientation],
    innerBar !== 'inherit' && !disabled && styles.colors[theme][innerBar],
    disabled && styles.disabled[theme],
    defaultClassName,
    className
  );

  return (
    <div
      aria-valuenow={+value}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      className={mergedClassName}
      ref={ref}
      {...restContainerProps}
    >
      <LinearProgressBar
        theme={theme}
        color={color}
        orientation={orientation}
        value={value}
        disabled={disabled}
        {...progressBarProps}
      >
        {children && (
          <LinearProgressLabel
            theme={theme}
            color={color}
            vertical={vertical}
            disabled={disabled}
            {...labelProps}
          >
            {children}
          </LinearProgressLabel>
        )}
      </LinearProgressBar>
    </div>
  );
});

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;
