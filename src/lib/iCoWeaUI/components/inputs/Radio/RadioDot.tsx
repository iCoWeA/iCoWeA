import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import radioConfig from './radioConfig';

export type RadioDotDefaultProps = IconProps & {
  color?: Colors;
};

export type RadioDotProps = RadioDotDefaultProps & {
  theme: Themes;
  color: Colors;
  size: Sizes;
  bordered: boolean;
  valid: boolean;
  invalid: boolean;
  checked?: boolean;
  disabled?: boolean;
};

const RadioDot: FC<RadioDotProps> = ({
  theme,
  color,
  size,
  bordered,
  valid,
  invalid,
  checked,
  disabled,
  className,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = radioConfig.styles.dot;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    !valid && !invalid && !checked && !disabled && styles.color[theme],
    checked && !disabled && styles.checkedColors[theme][color],
    valid && !disabled && !checked && styles.valid[theme],
    invalid && !disabled && !checked && styles.invalid[theme],
    disabled && styles.disabled[theme],
    checked && disabled && styles.disabledChecked[theme],
    bordered && !checked && styles.border,
    checked && styles.border,
    className
  );

  return (
    <Icon
      size={size}
      color={color}
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <svg viewBox="0 0 24 24" focusable="false">
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
