import { type PopoverProps } from '../components/UI/Popover/Popover';

export interface MenuConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    position: Positions;
    lockScroll: boolean;
    overlayRef: Element | null;
    popoverProps: PopoverProps;
  };
}

const menuConfig: MenuConfig = {
  defaultProps: {
    color: 'light',
    elevated: true,
    position: 'bottom',
    lockScroll: false,
    overlayRef: null,
    popoverProps: {}
  }
};

export default menuConfig;
