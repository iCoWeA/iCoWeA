import React, { type SVGAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../hooks/useTheme';
import { mergeProps, mergeClasses } from '../../utils/utils';
import DefaultSpinnerBar, { type DefaultSpinnerBarDefaultProps } from './DefaultSpinnerBar';
import DefaultSpinnerProgressBar, {
  type DefaultSpinnerProgressBarDefaultProps
} from './DefaultSpinnerProgressBar';
import defaultSpinnerConfig from './defaultSpinnerConfig';

export type DefaultSpinnerDefaultProps = {
  size?: Spacings;
  color?: DefaultTextColors;
  stable?: boolean;
  value?: string | number;
};

export type DefaultSpinnerProps = SVGAttributes<SVGSVGElement> &
DefaultSpinnerDefaultProps & {
  innerBar?: DefaultTextColors;
  barProps?: DefaultSpinnerBarDefaultProps;
  progressBarProps?: DefaultSpinnerProgressBarDefaultProps;
  disabled?: boolean;
};

const DefaultSpinner = forwardRef<SVGSVGElement, DefaultSpinnerProps>((props, ref) => {
  const {
    size,
    color,
    stable,
    value,
    innerBar,
    barProps,
    progressBarProps,
    className,
    disabled,
    strokeWidth = 4,
    ...restProps
  } = mergeProps(defaultSpinnerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = defaultSpinnerConfig.styles.root;

    return mergeClasses(styles.base, styles.sizes[size], className);
  }, [size, className]);

  return (
    <svg
      className={mergedClassName}
      strokeLinecap="round"
      viewBox="0 0 40 40"
      ref={ref}
      {...restProps}
    >
      {innerBar && (
        <DefaultSpinnerBar
          theme={theme}
          color={innerBar}
          value={value}
          disabled={disabled}
          strokeWidth={strokeWidth}
          {...barProps}
        />
      )}
      <DefaultSpinnerProgressBar
        theme={theme}
        color={color}
        stable={stable}
        value={value}
        disabled={disabled}
        strokeWidth={strokeWidth}
        {...progressBarProps}
      />
    </svg>
  );
});

DefaultSpinner.displayName = 'DefaultSpinner';

export default DefaultSpinner;
