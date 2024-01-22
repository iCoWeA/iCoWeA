import React, { type FieldsetHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import inputConfig from './inputConfig';

export type InputFieldsetDefaultProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;

export type InputFieldsetProps = InputFieldsetDefaultProps & {
  variant: InputVariants;
  theme: Themes;
  color: Colors;
  valid: boolean;
  invalid: boolean;
};

const InputFieldset: FC<InputFieldsetProps> = ({
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
  const styles = inputConfig.styles.container;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions.middle,
    styles.variants[variant].middle,
    !disabled && variant === 'soft' && styles.background[theme],
    !valid && !invalid && !disabled && styles.colors[theme][color],
    valid && !disabled && styles.valid[theme],
    invalid && !disabled && styles.invalid[theme],
    disabled && styles.disabled[theme],
    className
  );

  return (
    <fieldset
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default InputFieldset;
