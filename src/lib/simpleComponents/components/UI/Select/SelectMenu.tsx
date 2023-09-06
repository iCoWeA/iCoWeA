import React, { type Dispatch, type SetStateAction, forwardRef } from 'react';
import Menu, { type MenuProps } from '../Menu/Menu';

export interface SelectMenuProps extends MenuProps {
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}

const SelectMenu = forwardRef<HTMLDivElement, SelectMenuProps>(({ setIsFocused, popoverProps = {}, ...restProps }, ref) => {
  popoverProps.onEntering = () => {
    setIsFocused(true);
  };

  popoverProps.onExiting = () => {
    setIsFocused(false);
  };

  return (
    <Menu
      popoverProps={popoverProps}
      ref={ref}
      {...restProps}
    />
  );
});

SelectMenu.displayName = 'SelectMenu';

export default SelectMenu;
