import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import Button, { type ButtonProps } from '../Button/Button';
import closeButtonConfig from './closeButtonConfig';

export type CloseButtonDefaultProps = {
  position?: SidePositions;
  panel?: boolean;
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  border?: boolean;
  noRipple?: boolean;
};

export type CloseButtonProps = ButtonProps &
CloseButtonDefaultProps & {
  iconProps?: IconProps;
};

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { position, panel, size, iconProps, defaultClassName, className, children, ...restProps } =
    useConfig('closeButton', closeButtonConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = closeButtonConfig.styles;
  const positionVariant = panel ? 'panel' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[positionVariant][position][size],
    defaultClassName,
    className
  );

  return (
    <Button
      size={size}
      icon
      block={false}
      shadow={false}
      loading={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children ?? (
        <Icon
          variant="text"
          color="inherit"
          size="md"
          border={false}
          {...iconProps}
        >
          <svg
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </Icon>
      )}
    </Button>
  );
});

CloseButton.displayName = 'CloseButton';

export default CloseButton;
