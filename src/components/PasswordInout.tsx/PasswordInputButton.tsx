import React, { type MouseEvent, forwardRef } from 'react';
import IconButton, { type IconButtonProps } from '../../lib/simpleComponents/components/UI/IconButton/IconButton';

export interface PasswordInputButtonProps extends IconButtonProps {
  onShow?: () => void;
}

const PasswordInputButton = forwardRef<HTMLButtonElement, PasswordInputButtonProps>(({ onShow, onClick, ...restProps }, ref) => {
  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (onShow !== undefined) {
      event.stopPropagation();
      onShow();
    }

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  return (
    <IconButton
      variant="text"
      color="dark"
      size="sm"
      onClick={clickHandler}
      ref={ref}
      {...restProps}
    />
  );
});

PasswordInputButton.displayName = 'PasswordInputButton';

export default PasswordInputButton;
