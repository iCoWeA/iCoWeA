import React, { type AnchorHTMLAttributes, type ReactNode, forwardRef } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import LinkButtonSpinner, { type LinkButtonSpinnerDefaultProps } from './LinkButtonSpinner';
import linkButtonConfig from './linkButtonConfig';

export type LinkButtonDefaultProps = {
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

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> &
LinkButtonDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  rippleProps?: RippleProps;
  spinnerProps?: LinkButtonSpinnerDefaultProps;
  disabled?: boolean;
};

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>((props, ref) => {
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
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('linkButton', linkButtonConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = linkButtonConfig.styles.root;
  const sizeVariant = icon ? 'icon' : 'default';

  console.log(variant);

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[sizeVariant][size],
    disabled ? styles.disabled[theme] : styles.variants[variant][theme][color],
    icon && styles.icon,
    border && styles.border,
    block && styles.block,
    shadow && styles.shadow,
    loading && styles.loading,
    defaultClassName,
    className
  );

  return (
    <a
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {leftDecorator}
      {children}
      {rightDecorator}
      {loading && (
        <LinkButtonSpinner
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
    </a>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
