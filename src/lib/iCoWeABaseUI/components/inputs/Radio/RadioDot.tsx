import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import radioConfig from './radioConfig';

export type RadioDotDefaultProps = IconProps;

export type RadioDotProps = RadioDotDefaultProps & {
  theme: Themes;
  size: Sizes;
  variant: Variants;
  color: Colors;
  border: boolean;
  valid?: boolean;
  invalid?: boolean;
  checked?: boolean;
  disabled?: boolean;
};

const RadioDot: FC<RadioDotProps> = ({
  theme,
  variant,
  color,
  border,
  valid,
  invalid,
  checked,
  className,
  disabled,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = radioConfig.styles.dot;
    const colorVariant = invalid ? 'invalid' : valid ? 'valid' : 'default';
    const checkVariant = checked ? 'checked' : 'unchecked';

    return mergeClasses(
      styles.base,
      !checked && styles.unchecked,
      !checked && styles.color[colorVariant][theme],
      disabled && styles.disabled[checkVariant][theme],
      className
    );
  }, [variant, checked, disabled, invalid, valid, theme, className]);

  return (
    <Icon
      spacing="text"
      variant={variant}
      color={checked && !disabled ? (invalid ? 'error' : valid ? 'success' : color) : 'inherit'}
      border={!checked ? border : true}
      radius="circular"
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <svg
          focusable="false"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
          />
        </svg>
      )}
    </Icon>
  );
};

export default RadioDot;
