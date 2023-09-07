import React, { type Dispatch, type SetStateAction, forwardRef } from 'react';
import Menu, { type MenuProps } from '../Menu/Menu';

export interface SelectMenuProps extends MenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const SelectMenu = forwardRef<HTMLDivElement, SelectMenuProps>(({ setIsMenuOpen, popoverProps = {}, ...restProps }, ref) => {
  popoverProps.onEntering = () => {
    setIsMenuOpen(true);
  };

  popoverProps.onExiting = () => {
    setIsMenuOpen(false);
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
