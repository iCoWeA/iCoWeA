import { type PopoverVariants } from '../components/UI/Popover';

export interface MenuConfig {
  defaultProps: {
    variant: PopoverVariants;
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
  };
}

const menuConfig: MenuConfig = {
  defaultProps: {
    variant: 'plain',
    position: 'bottom',
    responsive: true,
    offset: 0,
    lockScroll: false,
    closeOnAwayClick: true,
    keepMounted: false,
    backdrop: false
  }
};

export default menuConfig;
