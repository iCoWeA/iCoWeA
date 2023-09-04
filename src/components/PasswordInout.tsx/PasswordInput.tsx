import React, { forwardRef, useState, useEffect } from 'react';
import { type IconButtonProps } from '../../lib/simpleComponents/components/UI/IconButton/IconButton';
import { type IconProps } from '../../lib/simpleComponents/components/UI/Icon/Icon';
import usePrevious from '../../lib/simpleComponents/hooks/usePrevious';
import Input, { type InputProps } from '../../lib/simpleComponents/components/UI/Input/Input';
import PasswordInputButton from './PasswordInputButton';
import PasswordInputIcon from './PasswordInputIcon';

export interface PasswordInputProps extends InputProps {
  show?: boolean;
  buttonProps?: IconButtonProps;
  iconProps?: IconProps;
}

const PasswordInput = forwardRef<HTMLDivElement, PasswordInputProps>(({ show, buttonProps = {}, iconProps = {}, ...restProps }, ref) => {
  /* --- Set states --- */
  const [isShow, setIsShow] = useState(show ?? false);

  /* --- Set previous values  --- */
  const prevShow = usePrevious(show);

  useEffect(() => {
    if (prevShow !== undefined && show === undefined) {
      setIsShow(prevShow);
    }
  }, [show]);

  /* --- Set props --- */
  const type = isShow ? 'text' : 'password';

  /* --- Set button --- */
  let onShow: (() => void) | undefined;

  if (show === undefined) {
    onShow = () => {
      setIsShow((isShow) => !isShow);
    };
  }

  return (
    <Input
      endAdornment={
        <PasswordInputButton
          onShow={onShow}
          {...buttonProps}
        >
          <PasswordInputIcon
            show={isShow}
            {...iconProps}
          />
        </PasswordInputButton>
      }
      type={type}
      ref={ref}
      {...restProps}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
