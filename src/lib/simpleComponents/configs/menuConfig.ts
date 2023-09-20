import { type PopperVariants } from '../components/UI/Popper';

export interface MenuConfig {
  defaultProps: {
    variant: PopperVariants;
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
    backdrop: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
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
  },
  styles: {
    base: {
      zIndex: 'z-40'
    }
  }
};

export default menuConfig;
