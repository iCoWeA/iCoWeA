import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { cutPanelSize } from '../../../utils/utils';
import Icon, { type IconProps } from '../../data-display/Icon/Icon';
import Button, { type ButtonProps } from '../Button/Button';
import closeButtonConfig from './closeButtonConfig';

export type CloseButtonDefaultProps = {
  placement?: Closable
  size?: PanelSpacings;
  variant?: Variants;
  color?: DefaultColors;
  noRipple?: boolean;
};

export type CloseButtonProps = Omit<ButtonProps, 'size'> &
CloseButtonDefaultProps & {
  iconProps?: IconProps;
};

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { placement, size, iconProps, defaultClassName, className, children, ...restProps } =
    useConfig('closeButton', closeButtonConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = closeButtonConfig.styles;

    return mergeClasses(
      placement !== 'none' && styles.base,
      placement !== 'none' && size !== 'none' && styles.placements[placement][size],
      defaultClassName,
      className
    );
  }, [placement, size, defaultClassName, className]);

  return (
    <Button
      size={cutPanelSize(size)}
      block={false}
      icon
      border={false}
      radius="circular"
      loading={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children ?? (
        <Icon
          size="md"
          spacing="text"
          variant="default"
          color="inherit"
          border={false}
          radius="none"
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
