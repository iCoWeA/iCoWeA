import React, { type ReactNode, forwardRef, useMemo } from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

import { getBorderVariant, reverseColor } from '../../../iCoWeABaseUI/utils/utils';
import DefaultRipple, { type DefaultRippleProps } from '../../../iCoWeAUI/components/DefaultRipple/DefaultRipple';
import useTheme from '../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../iCoWeAUI/utils/utils';
import useConfig from '../../hooks/useConfig';
import LinkButtonSpinner, { type LinkButtonSpinnerDefaultProps } from './LinkButtonSpinner';
import linkButtonConfig from './linkButtonConfig';

export type LinkButtonDefaultProps = {
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

export type LinkButtonProps = RouterLinkProps &
LinkButtonDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: DefaultRippleProps;
  spinnerProps?: LinkButtonSpinnerDefaultProps;
  disabled?: boolean;
};

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
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
  } = useConfig('linkButton', linkButtonConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const borderVariant = getBorderVariant(variant);

  const mergedClassName = useMemo(() => {
    const styles = linkButtonConfig.styles.root;
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
    <RouterLink
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading && (
        <LinkButtonSpinner
          color={reverseColor(variant, color)}
          disabled={disabled}
          {...spinnerProps}
        />
      )}
      {!noRipple && !disabled && (
        <DefaultRipple
          color={reverseColor(variant, color)}
          border={border}
          sibling={false}
          {...rippleProps}
        />
      )}
    </RouterLink>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
