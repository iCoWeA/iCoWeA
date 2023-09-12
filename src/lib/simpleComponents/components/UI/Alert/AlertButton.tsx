import React, { forwardRef } from 'react';
import Button, { type ButtonProps } from '../Button/Button';
import Icon, { type IconProps } from '../Icon/Icon';

export interface AlertButtonProps extends ButtonProps {
  iconProps: IconProps;
}

const AlertButton = forwardRef<HTMLButtonElement, AlertButtonProps>(({ iconProps, ...restProps }, ref) => (
  <Button
    variant="text"
    ref={ref}
    {...restProps}
  >
    <Icon {...iconProps}>
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Icon>
  </Button>
));

AlertButton.displayName = 'AlertButton';

export default AlertButton;
