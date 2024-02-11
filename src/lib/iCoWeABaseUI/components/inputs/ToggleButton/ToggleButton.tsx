/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { type ReactNode, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Button, { type ButtonProps } from '../Button/Button';
import toggleButtonConfig from './toggleButtonConfig';

export type ToggleButtonDefaultProps = {
  size?: Spacings;
  block?: boolean;
  icon?: boolean;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  noRipple?: boolean;
};

export type ToggleButtonProps = ButtonProps &
ToggleButtonDefaultProps & {
  checked?: boolean;
  checkedVariant?: Variants;
  checkedColor?: DefaultColors;
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
  const mergedClassName = useMemo(() => {
    const styles = toggleButtonConfig.styles;

    return mergeClasses(checked && styles.checked, defaultClassName, className);
  }, [checked, defaultClassName, className]);

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
