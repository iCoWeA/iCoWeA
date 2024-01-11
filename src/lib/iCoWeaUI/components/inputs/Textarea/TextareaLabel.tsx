import React, { type LabelHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import textareaConfig from './textareaConfig';

export type TextareaLabelDefaultProps = LabelHTMLAttributes<HTMLLabelElement>;

export type TextareaLabelProps = TextareaLabelDefaultProps & {
  variant: InputVariants;
  theme: Themes;
  color: Colors;
  valid: boolean;
  invalid: boolean;
  name?: string;
  disabled?: boolean;
};

const TextareaLabel: FC<TextareaLabelProps> = ({
  variant,
  theme,
  color,
  valid,
  invalid,
  name,
  disabled,
  className,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = textareaConfig.styles.label;

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
      htmlFor={name}
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default TextareaLabel;
