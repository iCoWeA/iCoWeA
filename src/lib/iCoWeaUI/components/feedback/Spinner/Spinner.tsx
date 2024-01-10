import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import SpinnerBar, { type SpinnerBarDefaultProps } from './SpinnerBar';
import SpinnerContainer, { type SpinnerContainerDefaultProps } from './SpinnerContainer';
import SpinnerLabel, { type SpinnerLabelDefaultProps } from './SpinnerLabel';
import spinnerConfig from './spinnerConfig';

export type SpinnerDefaultProps = {
  color?: Colors;
  size?: Sizes;
  inner?: boolean;
  innerBar?: TextColors;
  rotate?: boolean;
  value?: number | string;
  strokeWidth?: number | string;
  strokeLinecap?: 'inherit' | 'butt' | 'round' | 'square';
};

export type SpinnerProps = BaseHTMLAttributes<HTMLDivElement> &
SpinnerDefaultProps & {
  containerProps?: SpinnerContainerDefaultProps;
  progressBarProps?: SpinnerBarDefaultProps;
  innerBarProps?: SpinnerBarDefaultProps;
  labelProps?: SpinnerLabelDefaultProps;
  disabled?: boolean;
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    color,
    size,
    inner,
    innerBar,
    rotate,
    containerProps,
    progressBarProps,
    innerBarProps,
    labelProps,
    value,
    strokeWidth,
    strokeLinecap,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('spinner', spinnerConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set lengths --- */
  const length = 2 * Math.PI * (20 - +strokeWidth / 2);
  const offset = length - (+value * length) / 100;

  /* --- Set classes --- */
  const styles = spinnerConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    !inner && styles.sizes[size],
    inner && styles.innerSizes[size],
    defaultClassName,
    className
  );

  return (
    <div
      role="progressbar"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <SpinnerContainer
        rotate={rotate}
        viewBox="0 0 40 40"
        {...containerProps}
      >
        {innerBar !== 'inherit' && (
          <SpinnerBar
            styles={spinnerConfig.styles.innerBar}
            theme={theme}
            color={innerBar}
            disabled={disabled}
            strokeWidth={strokeWidth}
            cx="20"
            cy="20"
            r="18"
            {...innerBarProps}
          />
        )}
        <SpinnerBar
          styles={spinnerConfig.styles.progressBar}
          theme={theme}
          color={color}
          disabled={disabled}
          strokeDasharray={length}
          strokeDashoffset={offset}
          strokeLinecap={strokeLinecap}
          strokeWidth={strokeWidth}
          cx="20"
          cy="20"
          r="18"
          {...progressBarProps}
        />
      </SpinnerContainer>
      {children && (
        <SpinnerLabel
          theme={theme}
          color={color}
          size={size}
          disabled={disabled}
          {...labelProps}
        >
          {children}
        </SpinnerLabel>
      )}
    </div>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
