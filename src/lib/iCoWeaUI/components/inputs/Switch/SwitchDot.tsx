import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import switchConfig from './switchConfig';

export type SwitchDotDefaultProps = IconProps & {
  color?: Colors;
};

export type SwitchDotProps = SwitchDotDefaultProps & {
  theme: Themes;
  color: Colors;
  checked?: boolean;
  disabled?: boolean;
};

const SwitchDot: FC<SwitchDotProps> = ({
  theme,
  color,
  checked,
  disabled,
  className,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = switchConfig.styles.dot;

  const mergedClassName = mergeClasses(
    styles.base,
    !disabled && !checked && styles.color[theme],
    !disabled && checked && styles.checkedColors[theme][color],
    disabled && styles.disabled[theme],
    checked && styles.checked,
    className
  );

  return (
    <Icon
      color={color}
      size="md"
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <svg
          viewBox="0 0 24 24"
          focusable="false"
        >
          <circle
            cx="12"
            cy="12"
            r="12"
          />
        </svg>
      )}
    </Icon>
  );
};

export default SwitchDot;
