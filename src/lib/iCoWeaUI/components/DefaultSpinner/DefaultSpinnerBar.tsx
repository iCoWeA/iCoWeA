import React, { type SVGAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../utils/utils';
import defaultSpinnerConfig from './defaultSpinnerConfig';

export type DefaultSpinnerBarDefaultProps = SVGAttributes<SVGCircleElement> & {
  color?: DefaultTextColors;
};

export type DefaultSpinnerBarProps = DefaultSpinnerBarDefaultProps & {
  theme: Themes;
  color: DefaultTextColors;
  value: number | string;
  disabled?: boolean;
  strokeWidth: string | number;
};

const DefaultSpinnerBar: FC<DefaultSpinnerBarProps> = ({
  theme,
  color,
  value,
  className,
  disabled,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = defaultSpinnerConfig.styles.bar;

    return mergeClasses(
      styles.base,
      disabled ? styles.disabled[theme] : styles.colors[theme][color],
      className
    );
  }, [disabled, theme, color, className]);

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

export default DefaultSpinnerBar;
