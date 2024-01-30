import React, { type AnchorHTMLAttributes, type ReactNode, forwardRef } from 'react';

import ButtonSpinner, {
  type ButtonSpinnerProps
} from '../../../../iCoWeAUI/components/ButtonSpinner/ButtonSpinner';
import Ripple, { type RippleProps } from '../../../../iCoWeAUI/components/Ripple/Ripple';
import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
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
  spinnerProps?: ButtonSpinnerProps;
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
  const styles = linkButtonConfig.styles;
  const sizeVariant = icon ? 'icon' : 'default';

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
    </a>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
