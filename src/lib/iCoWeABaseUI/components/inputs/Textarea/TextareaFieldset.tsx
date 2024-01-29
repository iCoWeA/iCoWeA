import React, { type FieldsetHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import textareaConfig from './textareaConfig';

export type TextareaFieldsetDefaultProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;

export type TextareaFieldsetProps = TextareaFieldsetDefaultProps & {
  variant: InputVariants;
  theme: Themes;
  color: Colors;
  valid: boolean;
  invalid: boolean;
};

const TextareaFieldset: FC<TextareaFieldsetProps> = ({
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
  const styles = textareaConfig.styles.container;

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

export default TextareaFieldset;
