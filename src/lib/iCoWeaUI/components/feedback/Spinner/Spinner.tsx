import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import SpinnerBar, { type SpinnerBarDefaultProps } from './SpinnerBar';
import SpinnerContainer, { type SpinnerContainerDefaultProps } from './SpinnerContainer';
import SpinnerLabel, { type SpinnerLabelDefaultProps } from './SpinnerLabel';
import SpinnerProgressBar from './SpinnerProgressBar';
import spinnerConfig from './spinnerConfig';

export type SpinnerDefaultProps = {
  color?: Colors;
  size?: Sizes;
  innerBar?: TextColors;
  rotate?: boolean;
  value?: number | string;
};

export type SpinnerProps = FlexProps &
SpinnerDefaultProps & {
  containerProps?: SpinnerContainerDefaultProps;
  barProps?: SpinnerBarDefaultProps;
  progressBarProps?: SpinnerBarDefaultProps;
  labelProps?: SpinnerLabelDefaultProps;
  strokeWidth?: number | string;
  disabled?: boolean;
};

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>((props, ref) => {
  const {
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
    disabled ? styles.disabled[theme] : styles.strokes[theme][color],
    defaultClassName,
    className
  );

  return (
    <Flex
      color={color}
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
          {...labelProps}
        >
          {children}
        </SpinnerLabel>
      )}
    </Flex>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
