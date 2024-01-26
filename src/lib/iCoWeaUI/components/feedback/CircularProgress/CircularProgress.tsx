/* --- ARIA ---
 * aria-labelledby
 */

import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Spinner, { type SpinnerProps } from '../Spinner/Spinner';
import circularProgressConfig from './circularProgressConfig';

export type CircularProgressDefaultProps = {
  color?: Colors;
  size?: Sizes;
  innerBar?: TextColors;
  value?: number | string;
};

export type CircularProgressProps = SpinnerProps &
CircularProgressDefaultProps & {
  strokeWidth?: number | string;
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
      rotate={false}
      aria-valuenow={+value}
      aria-valuemin={0}
      aria-valuemax={100}
      ref={ref}
      {...restProps}
    />
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
