import React, { type SVGAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../utils/utils';
import defaultSpinnerConfig from './defaultSpinnerConfig';

export type DefaultSpinnerProgressBarDefaultProps = SVGAttributes<SVGCircleElement> & {
  color?: DefaultTextColors;
};

export type DefaultSpinnerProgressBarProps = DefaultSpinnerProgressBarDefaultProps & {
  theme: Themes;
  color: DefaultTextColors;
  stable: boolean;
  value: number | string;
  disabled?: boolean;
  strokeWidth: string | number;
};

const DefaultSpinnerBar: FC<DefaultSpinnerProgressBarProps> = ({
  theme,
  color,
  stable,
  value,
  className,
  disabled,
  strokeWidth,
  ...restProps
}) => {
  /* --- Set lengths --- */
  const length = 2 * Math.PI * (20 - +strokeWidth / 2);
  const offset = length - (+value * length) / 100;

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = defaultSpinnerConfig.styles.progressBar;
    const transformVariant = stable ? 'stable' : 'rotate';

    return mergeClasses(
      styles.base,
      styles.transition[transformVariant],
      disabled ? styles.disabled[theme] : styles.colors[theme][color],
      className
    );
  }, [stable, disabled, theme, color, className]);

  return (
    <circle
      className={mergedClassName}
      cx="20"
      cy="20"
      r="18"
      strokeDasharray={length}
      strokeDashoffset={offset}
      strokeWidth={strokeWidth}
      {...restProps}
    />
  );
};

export default DefaultSpinnerBar;
