import React, { type LabelHTMLAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import inputConfig from './inputConfig';

export type InputLabelDefaultProps = LabelHTMLAttributes<HTMLLabelElement>;

export type InputLabelProps = InputLabelDefaultProps & {
  theme: Themes;
  variant: InputVariants;
  color: DefaultTextColors;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

const InputLabel: FC<InputLabelProps> = ({
  theme,
  variant,
  color,
  valid,
  invalid,
  className,
  disabled,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = inputConfig.styles.label;
    const colorVariant = disabled ? 'disabled' : invalid ? 'invalid' : valid ? 'valid' : 'default';

    return mergeClasses(
      styles.base,
      styles.placements[variant],
      styles.color[colorVariant][theme],
      colorVariant === 'default' && styles.colors[theme][color],
      className
    );
  }, [disabled, invalid, valid, variant, theme, color, className]);

  return (
    <label
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default InputLabel;
