import React, { type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import checkboxConfig from './checkboxConfig';

export type CheckboxIconDefaultProps = IconProps & {
  color?: Colors;
};

export type CheckboxIconProps = CheckboxIconDefaultProps & {
  theme: Themes;
  color: Colors;
  size: Sizes;
  border: boolean;
  valid: boolean;
  invalid: boolean;
  checked?: boolean;
  disabled?: boolean;
};

const CheckboxIcon: FC<CheckboxIconProps> = ({
  theme,
  color,
  border,
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
    !valid && !invalid && !checked && !disabled && styles.color[theme],
    valid && !disabled && !checked && styles.valid[theme],
    invalid && !disabled && !checked && styles.invalid[theme],
    disabled && styles.disabled[theme],
    checked && disabled && styles.disabledChecked[theme],
    className
  );

  return (
    <Icon
      variant="solid"
      color={valid ? 'success' : invalid ? 'error' : color}
      spacing={false}
      border={!checked && border}
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
