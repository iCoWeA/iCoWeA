import React, { type SVGAttributes, forwardRef } from 'react';

import useTheme from '../../hooks/useTheme';
import { mergeProps, mergeClasses } from '../../utils/utils';
import ButtonSpinnerProgressBar, {
  type ButtonSpinnerProgressBarDefaultProps
} from './ButtonSpinnerProgressBar';
import buttonSpinnerConfig from './buttonSpinnerConfig';

export type ButtonSpinnerDefaultProps = {
  variant?: Variants;
  color?: Colors;
  value?: number | string;
};

export type ButtonSpinnerProps = SVGAttributes<SVGSVGElement> &
ButtonSpinnerDefaultProps & {
  progressBarProps?: ButtonSpinnerProgressBarDefaultProps;
  strokeWidth?: number | string;
  disabled?: boolean;
};

const ButtonSpinner = forwardRef<SVGSVGElement, ButtonSpinnerProps>((props, ref) => {
  const {
    variant,
    color,
    progressBarProps,
    value,
    strokeWidth = 4,
    disabled,
    className,
    children,
    ...restProps
  } = mergeProps(buttonSpinnerConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = buttonSpinnerConfig.styles.root;

  const mergedClassName = mergeClasses(
    styles.base,
    disabled ? styles.disabled[theme] : styles.variants[variant][theme][color],
    className
  );

  return (
    <svg
      viewBox="0 0 40 40"
      ref={ref}
      className={mergedClassName}
      {...restProps}
    >
      <ButtonSpinnerProgressBar
        strokeWidth={strokeWidth}
        value={value}
        {...progressBarProps}
      />
    </svg>
  );
});

ButtonSpinner.displayName = 'ButtonSpinner';

export default ButtonSpinner;
