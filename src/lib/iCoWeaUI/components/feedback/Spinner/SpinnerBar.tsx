import React, { type SVGAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';

export type SpinnerBarDefaultProps = SVGAttributes<SVGCircleElement> & {
  color?: Colors;
  disabled?: boolean;
};

export type SpinnerBarProps = SpinnerBarDefaultProps & {
  styles: any;
  theme: Themes;
  color: Colors;
};

const SpinnerBar: FC<SpinnerBarProps> = ({
  styles,
  theme,
  color,
  disabled,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = mergeClasses(
    styles.base,
    disabled ? styles.disabled[theme] : styles.strokes[theme][color],
    className
  );

  return (
    <circle
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default SpinnerBar;
