/* --- ARIA ---
 * aria-labelledby
 */

import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Spinner, { type SpinnerProps } from '../Spinner/Spinner';
import circularProgressConfig from './circularProgressConfig';

export type CircularProgressDefaultProps = {
  size?: AllSizes;
  color?: DefaultTextColors;
  value?: string | number;
};

export type CircularProgressProps = SpinnerProps &
CircularProgressDefaultProps & {
  innerBar?: DefaultTextColors;
  disabled?: boolean;
};

const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>((props, ref) => {
  const { value, ...restProps } = useConfig(
    'circularProgress',
    circularProgressConfig.defaultProps,
    props
  );

  return (
    <Spinner
      stable
      value={value}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={+value}
      ref={ref}
      {...restProps}
    />
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
