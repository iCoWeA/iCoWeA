import React, { type LabelHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import inputConfig from './inputConfig';

export type InputLabelDefaultProps = LabelHTMLAttributes<HTMLLabelElement>;

export type InputLabelProps = InputLabelDefaultProps & {
  variant: InputVariants;
  theme: Themes;
  color: Colors;
  valid: boolean;
  invalid: boolean;
  disabled?: boolean;
};

const InputLabel: FC<InputLabelProps> = ({
  variant,
  theme,
  color,
  valid,
  invalid,
  disabled,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = inputConfig.styles.label;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant],
    !valid && !invalid && !disabled && styles.colors[theme][color],
    valid && !disabled && styles.valid[theme],
    invalid && !disabled && styles.invalid[theme],
    disabled && styles.disabled[theme],
    className
  );

  return (
    <label
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default InputLabel;
