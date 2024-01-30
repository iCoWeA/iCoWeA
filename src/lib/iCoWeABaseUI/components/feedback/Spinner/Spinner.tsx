import React, { forwardRef } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import SpinnerBar, { type SpinnerBarDefaultProps } from './SpinnerBar';
import SpinnerContainer, { type SpinnerContainerDefaultProps } from './SpinnerContainer';
import SpinnerLabel, { type SpinnerLabelDefaultProps } from './SpinnerLabel';
import SpinnerProgressBar, { type SpinnerProgressBarDefaultProps } from './SpinnerProgressBar';
import spinnerConfig from './spinnerConfig';

export type SpinnerDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  innerBar?: TextColors;
  rotate?: boolean;
  value?: number | string;
};

export type SpinnerProps = StackProps &
SpinnerDefaultProps & {
  containerProps?: SpinnerContainerDefaultProps;
  barProps?: SpinnerBarDefaultProps;
  progressBarProps?: SpinnerProgressBarDefaultProps;
  labelProps?: SpinnerLabelDefaultProps;
  strokeWidth?: number | string;
  disabled?: boolean;
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    innerBar,
    rotate,
    containerProps,
    barProps,
    progressBarProps,
    labelProps,
    value,
    strokeWidth = 4,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('spinner', spinnerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = spinnerConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    disabled ? styles.disabled[theme] : styles.variants[variant][theme][color],
    defaultClassName,
    className
  );

  return (
    <Stack
      justify="center"
      align="center"
      gap="none"
      disabled={disabled}
      role="progressbar"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <SpinnerContainer
        rotate={rotate}
        {...containerProps}
      >
        {innerBar !== 'inherit' && (
          <SpinnerBar
            theme={theme}
            color={innerBar}
            strokeWidth={strokeWidth}
            disabled={disabled}
            {...barProps}
          />
        )}
        <SpinnerProgressBar
          strokeWidth={strokeWidth}
          value={value}
          {...progressBarProps}
        />
      </SpinnerContainer>
      {children && (
        <SpinnerLabel
          size={size}
          disabled={disabled}
          {...labelProps}
        >
          {children}
        </SpinnerLabel>
      )}
    </Stack>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
