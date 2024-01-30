/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import React, { type ReactNode, forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Button, { type ButtonProps } from '../Button/Button';
import toggleButtonConfig from './toggleButtonConfig';

export type ToggleButtonDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  border?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type ToggleButtonProps = ButtonProps &
ToggleButtonDefaultProps & {
  checked?: boolean;
  checkedVariant?: Variants;
  checkedColor?: Colors;
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
};

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>((props, ref) => {
  const {
    variant,
    color,
    checked,
    checkedVariant,
    checkedColor,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('toggleButton', toggleButtonConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = toggleButtonConfig.styles;

  const mergedClassName = mergeClasses(checked && styles.checked, defaultClassName, className);

  return (
    <Button
      variant={(checked && checkedVariant) || variant}
      color={(checked && checkedColor) || color}
      loading={false}
      aria-pressed={checked}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
