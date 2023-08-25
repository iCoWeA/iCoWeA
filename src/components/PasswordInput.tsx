/* import React, { forwardRef, useState, type ReactNode } from 'react';
import { mergeProps } from '../lib/simpleComponents/utils/propsHelper';
import { type InputProps } from '../lib/simpleComponents/components/UI/Input';
import { type IconButtonProps } from '../lib/simpleComponents/components/UI/IconButton';

export interface PasswordInputProps extends InputProps {
  show?: boolean;
  endAdornment?: ReactNode;
  icon?: ReactNode;
  buttonProps?: IconButtonProps;
}

const defaultProps = {
  show: false,
  buttonProps: {}
};

const Input = forwardRef<HTMLDivElement, PasswordInputProps>((inputProps, rootRef) => {
  const { show, endAdornment, icon, buttonProps, ...restInputProps } = mergeProps(defaultProps, inputProps);
  let buttonNode = endAdornment;

  const [isShow, setIsShow] = useState(show);

  /* Set button props
  if (endAdornment === undefined) {
    const {color = 'default'} = buttonProps;
  }

  return <Input endAdornment={} />;
});

Input.displayName = 'Input';

export default Input; */
