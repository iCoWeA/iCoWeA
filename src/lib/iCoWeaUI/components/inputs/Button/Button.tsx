import React, { type ReactNode, type ButtonHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import buttonConfig from './buttonConfig';

export type ButtonDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  inner?: boolean;
  icon?: boolean;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
ButtonDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: RippleProps;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    inner,
    icon,
    bordered,
    block,
    shadow,
    noRipple,
    leftDecorator,
    rightDecorator,
    rippleProps,
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
    inner ? styles.innerSizes[sizeVariant] : styles.sizes[sizeVariant][size],
    icon && styles.icon,
    bordered && styles.border,
    block && styles.block,
    shadow && styles.shadow,
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
