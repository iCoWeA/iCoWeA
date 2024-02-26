import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import spinnerConfig from './spinnerConfig';

export type SpinnerLabelDefaultProps = Omit<MarkProps, 'size'> & {
  size?: AllSizes;
};

export type SpinnerLabelProps = SpinnerLabelDefaultProps & {
  theme: Themes;
  size: AllSizes;
  variant: Variants;
  color: Colors;
  disabled?: boolean;
};

const SpinnerLabel: FC<SpinnerLabelProps> = ({
  theme,
  size,
  color,
  className,
  disabled,
  ...restProps
}) => {
  /* -- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = spinnerConfig.styles.label;

    return mergeClasses(
      styles.base,
      styles.sizes[size],
      disabled && styles.disabled[theme],
      className
    );
  }, [size, disabled, theme, className]);

  return (
    <Mark
      color={disabled ? 'inherit' : color}
      border={false}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default SpinnerLabel;
