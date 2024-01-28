import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Button, { type ButtonProps } from '../Button/Button';
import toggleButtonConfig from './toggleButtonConfig';
import { mergeClasses } from '../../../utils/utils';
import useTheme from '../../../hooks/useTheme';

export type ToggleButtonDefaultProps = {
  uncheckedVariant?: Variants;
  variant?: Variants;
  uncheckedColor?: Colors;
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
};

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>((props, ref) => {
  const {
    uncheckedVariant,
    variant,
    uncheckedColor,
    color,
    checked,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('toggleButton', toggleButtonConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = toggleButtonConfig.styles;

  const mergedClassName = mergeClasses(
    !checked && uncheckedVariant === 'default' && styles.uncheckedVariants[theme][uncheckedColor],
    checked && styles.checked,
    defaultClassName,
    className
  );

  return (
    <Button
      variant={checked ? variant : uncheckedVariant}
      color={checked ? color : uncheckedColor}
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
