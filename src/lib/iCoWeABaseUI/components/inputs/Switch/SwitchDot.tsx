import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import switchConfig from './switchConfig';

export type SwitchDotDefaultProps = IconProps;

export type SwitchDotProps = SwitchDotDefaultProps & {
  size: Sizes;
  checked?: boolean;
};

const SwitchDot: FC<SwitchDotProps> = ({ checked, className, children, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = switchConfig.styles.dot;

    return mergeClasses(styles.base, checked && styles.checked, className);
  }, [checked, className]);

  return (
    <Icon
      spacing="text"
      variant="default"
      color="inherit"
      border={false}
      radius="circular"
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <svg
          focusable="false"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
          />
        </svg>
      )}
    </Icon>
  );
};

export default SwitchDot;
