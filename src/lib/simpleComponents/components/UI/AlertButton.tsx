import React, { forwardRef } from 'react';
import alertButtonConfig from '../../configs/alertButtonConfig';
import { type AlertVariants } from './Alert';
import Icon, { type IconProps } from './Icon';
import IconButton, { type IconButtonProps } from './IconButton';

export interface AlertButtonProps extends IconButtonProps {
  alertVariant?: AlertVariants;
  iconProps?: IconProps;
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>((props, ref) => {
  /* --- Set default props --- */
  const { alertVariant, color, iconProps, children, ...restProps } = { ...alertButtonConfig.defaultProps, ...props };

  /* --- Set props --- */
  const childrenNode =
    children === undefined ? <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /> : children;

  return (
    <IconButton
      variant={alertVariant === 'filled' ? 'plain' : 'text'}
      color={color}
      ref={ref}
      {...restProps}
    >
      <Icon {...iconProps}>{childrenNode}</Icon>
    </IconButton>
  );
});

AlertButton.displayName = 'AlertButton';

export default AlertButton;
