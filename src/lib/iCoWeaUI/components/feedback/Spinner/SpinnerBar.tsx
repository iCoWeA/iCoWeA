import React, { type SVGAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import spinnerConfig from './spinnerConfig';

export type SpinnerBarDefaultProps = SVGAttributes<SVGCircleElement> & {
  color?: Colors;
  disabled?: boolean;
};

export type SpinnerBarProps = SpinnerBarDefaultProps & {
  theme: Themes;
  color: Colors;
};

const SpinnerBar: FC<SpinnerBarProps> = ({ theme, color, disabled, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = spinnerConfig.styles.bar;

  const mergedClassName = mergeClasses(
    styles.base,
    disabled ? styles.disabled[theme] : styles.strokes[theme][color],
    className
  );

  return (
    <circle
      className={mergedClassName}
      cx="20"
      cy="20"
      r="18"
      {...restProps}
    />
  );
};

export default SpinnerBar;
