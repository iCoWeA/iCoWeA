import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import ButtonSpinner, { type ButtonSpinnerDefaultProps } from './ButtonSpinner';
import buttonConfig from './buttonConfig';

export type ButtonDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
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
    variant,
    color,
    size,
    icon,
    bordered,
    block,
    shadow,
    loading,
    noRipple,
    leftDecorator,
    rightDecorator,
    rippleProps,
    spinnerProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('button', buttonConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = buttonConfig.styles.root;
  const sizeVariant = icon ? 'icon' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.disabled[theme],
    styles.sizes[sizeVariant][size],
    icon && styles.icon,
    bordered && styles.border,
    block && styles.block,
    shadow && styles.shadow,
    loading && styles.loading,
    defaultClassName,
    className
  );

  return (
    <button
      className={mergedClassName}
      type="button"
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading && (
        <ButtonSpinner
          theme={theme}
          variant={variant}
          color={color}
          {...spinnerProps}
        />
      )}
      {!noRipple && (
        <Ripple
          variant={variant}
          color={color}
          sibling={false}
          {...rippleProps}
        />
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
