import React, { forwardRef, useState, type ReactNode, useEffect, type MouseEvent } from 'react';
import { mergeProps } from '../lib/simpleComponents/utils/propsHelper';
import usePrevious from '../lib/simpleComponents/hooks/usePrevious';
import Input, { type InputProps } from '../lib/simpleComponents/components/UI/Input';
import IconButton, { type IconButtonProps } from '../lib/simpleComponents/components/UI/IconButton';
import Icon from '../lib/simpleComponents/components/UI/Icon';

export interface PasswordInputProps extends InputProps {
  show?: boolean;
  icon?: ReactNode;
  buttonProps?: IconButtonProps;
  color?: Colors;
  endAdornment?: ReactNode;
  type?: string;
}

const defaultProps = {
  buttonProps: {},
  color: 'primary'
};

const PasswordInput = forwardRef<HTMLDivElement, PasswordInputProps>((rootProps, rootRef) => {
  const { show, icon, buttonProps, color: rootColor, endAdornment: rootEndAdornment, type: inputType, ...restRootProps } = mergeProps(defaultProps, rootProps);
  let rootEndAdornmentNode = rootEndAdornment;

  const [isShow, setIsShow] = useState(show ?? false);

  const prevShow = usePrevious(show);

  useEffect(() => {
    if (prevShow !== undefined && show === undefined) {
      setIsShow(prevShow);
    }
  }, [show]);

  /* Set root props */
  let rootType = inputType;

  if (rootType === undefined) {
    rootType = isShow ? 'text' : 'password';
  }

  /* Set button props */
  if (rootEndAdornment === undefined) {
    const { variant: buttonVariant = 'text', color: buttonColor = 'default', onClick: onButtonClick, ...restButtonProps } = buttonProps;

    const clickButtonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
      if (show === undefined) {
        event.stopPropagation();
        setIsShow((isShow) => !isShow);
      }

      if (onButtonClick !== undefined) {
        onButtonClick(event);
      }
    };

    let buttonChildrenNode = icon;

    /* Set icon props */
    if (icon === undefined) {
      buttonChildrenNode = isShow
        ? (
        <Icon>
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
        </Icon>
          )
        : (
        <Icon>
          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
        </Icon>
          );
    }

    rootEndAdornmentNode = (
      <IconButton
        variant={buttonVariant}
        color={buttonColor}
        onClick={clickButtonHandler}
        {...restButtonProps}
      >
        {buttonChildrenNode}
      </IconButton>
    );
  }

  return (
    <Input
      color={rootColor}
      endAdornment={rootEndAdornmentNode}
      type={rootType}
      ref={rootRef}
      {...restRootProps}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
