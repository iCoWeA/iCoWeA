import React, { type SVGAttributes, type FC } from 'react';

import { mergeClasses } from '../../utils/utils';
import spinnerConfig from './buttonSpinnerConfig';

export type ButtonSpinnerProgressBarDefaultProps = SVGAttributes<SVGCircleElement>;

export type ButtonSpinnerProgressBarProps = ButtonSpinnerProgressBarDefaultProps & {
  strokeWidth: number | string;
  value: number | string;
};

const ButtonSpinnerBar: FC<ButtonSpinnerProgressBarProps> = ({
  strokeWidth,
  value,
  className,
  ...restProps
}) => {
  /* --- Set lengths --- */
  const length = 2 * Math.PI * (20 - +strokeWidth / 2);
  const offset = length - (+value * length) / 100;

  /* --- Set classes --- */
  const styles = spinnerConfig.styles.progressBar;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <circle
      className={mergedClassName}
      strokeDasharray={length}
      strokeDashoffset={offset}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      cx="20"
      cy="20"
      r="18"
      {...restProps}
    />
  );
};

export default ButtonSpinnerBar;
