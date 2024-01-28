import React, { type FC } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import switchConfig from './switchConfig';

export type SwitchDotDefaultProps = IconProps;

export type SwitchDotProps = SwitchDotDefaultProps & {
  theme: Themes;
  size: Sizes;
  checked?: boolean;
};

const SwitchDot: FC<SwitchDotProps> = ({
  theme,
  size,
  checked,
  className,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = switchConfig.styles.dot;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    checked && styles.checked,
    className
  );

  return (
    <Icon
      variant="solid"
      color="inherit"
      size={size}
      spacing="none"
      border={false}
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
