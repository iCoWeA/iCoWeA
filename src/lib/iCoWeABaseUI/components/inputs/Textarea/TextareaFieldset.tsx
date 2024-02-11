import React, { type FieldsetHTMLAttributes, type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import inputConfig from './textareaConfig';

export type TextareaFieldsetDefaultProps = FieldsetHTMLAttributes<HTMLFieldSetElement>;

export type TextareaFieldsetProps = TextareaFieldsetDefaultProps & {
  theme: Themes;
  inputVariant: InputVariants;
  color: DefaultTextColors;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

const TextareaFieldset: FC<TextareaFieldsetProps> = ({
  theme,
  inputVariant,
  color,
  valid,
  invalid,
  className,
  disabled,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = inputConfig.styles.container;
    const colorVariant = disabled ? 'disabled' : invalid ? 'invalid' : valid ? 'valid' : false;

    return mergeClasses(
      styles.base,
      styles.placements[inputVariant].middle,
      colorVariant ? styles.color[colorVariant][theme] : styles.colors[theme][color],
      !colorVariant && inputVariant === 'soft' && styles.background[theme],
      className
    );
  }, [disabled, invalid, valid, inputVariant, theme, color, className]);

  return (
    <fieldset
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default TextareaFieldset;
