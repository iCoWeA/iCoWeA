import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import checkboxConfig from './checkboxConfig';

export type CheckboxIconDefaultProps = IconProps & {
  color?: Colors;
};

export type CheckboxIconProps = CheckboxIconDefaultProps & {
  theme: Themes;
  color: Colors;
  size: Sizes;
  bordered: boolean;
  valid: boolean;
  invalid: boolean;
  checked?: boolean;
  disabled?: boolean;
};

const CheckboxIcon: FC<CheckboxIconProps> = ({
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
  const styles = checkboxConfig.styles.icon;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    !valid && !invalid && !checked && !disabled && styles.color[theme],
    checked && !disabled && styles.checkedColors[theme][color],
    valid && !disabled && !checked && styles.valid[theme],
    invalid && !disabled && !checked && styles.invalid[theme],
    disabled && styles.disabled[theme],
    checked && disabled && styles.disabledChecked[theme],
    bordered && styles.border,
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
        <svg
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      )}
    </Icon>
  );
};

export default CheckboxIcon;
