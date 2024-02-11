import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import checkboxConfig from './checkboxConfig';

export type CheckboxIconDefaultProps = IconProps;

export type CheckboxIconProps = CheckboxIconDefaultProps & {
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

const CheckboxIcon: FC<CheckboxIconProps> = ({
  theme,
  variant,
  color,
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
    const styles = checkboxConfig.styles.icon;
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
      radius="none"
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
