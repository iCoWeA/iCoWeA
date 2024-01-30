import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';

import ButtonSpinner, {
  type ButtonSpinnerProps
} from '../../../../iCoWeAUI/components/ButtonSpinner/ButtonSpinner';
import Ripple, { type RippleProps } from '../../../../iCoWeAUI/components/Ripple/Ripple';
import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import buttonConfig from './buttonConfig';

export type ButtonDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  border?: boolean;
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
  spinnerProps?: ButtonSpinnerProps;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    icon,
    border,
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
  const styles = buttonConfig.styles;
  const sizeVariant = icon ? 'icon' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.disabled[theme],
    styles.sizes[sizeVariant][size],
    icon && styles.icon,
    border && styles.border,
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
          variant={variant}
          color={color}
          value="75"
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
