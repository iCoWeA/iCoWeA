import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderVariant, reverseColor } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import ButtonSpinner, { type ButtonSpinnerDefaultProps } from './ButtonSpinner';
import buttonConfig from './buttonConfig';

export type ButtonDefaultProps = {
  size?: Spacings;
  block?: boolean;
  icon?: boolean;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  loading?: boolean;
  noRipple?: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
ButtonDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: RippleProps;
  spinnerProps?: ButtonSpinnerDefaultProps;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    size,
    block,
    icon,
    variant,
    color,
    border,
    radius,
    loading,
    noRipple,
    leftDecorator,
    rightDecorator,
    rippleProps,
    spinnerProps,
    defaultClassName,
    className,
    disabled,
    children,
    ...restProps
  } = useConfig('button', buttonConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const borderVariant = getBorderVariant(variant);

  const mergedClassName = useMemo(() => {
    const styles = buttonConfig.styles.root;
    const sizeVariant = icon ? 'icon' : 'default';

    return mergeClasses(
      styles.base,
      ((!noRipple && !disabled) || loading) && styles.ripple,
      block && styles.block,
      icon && styles.icon,
      border && styles.border,
      variant === 'solid' && !disabled && styles.shadow,
      radius !== 'none' && styles.radiuses[radius],
      styles.sizes[sizeVariant][size],
      disabled ? styles.disabled[theme] : styles.variants[variant][theme][color],
      border && !disabled && styles.borderVariants[borderVariant][theme][color],
      loading && styles.loading,
      defaultClassName,
      className
    );
  }, [
    noRipple,
    loading,
    block,
    icon,
    border,
    radius,
    disabled,
    variant,
    theme,
    color,
    size,
    defaultClassName,
    className
  ]);

  return (
    <button
      className={mergedClassName}
      disabled={disabled}
      type="button"
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading && (
        <ButtonSpinner
          color={reverseColor(variant, color)}
          disabled={disabled}
          {...spinnerProps}
        />
      )}
      {!noRipple && !disabled && (
        <Ripple
          color={reverseColor(variant, color)}
          border={border}
          sibling={false}
          {...rippleProps}
        />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
