import { type CollapseDirections } from '../components/UI/Collapse';

export interface CollapseConfig {
  defaultProps: {
    direction: CollapseDirections;
    open: boolean;
    closeOnAwayClick: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    directions: Record<CollapseDirections, Record<string, string>>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    direction: 'vertical',
    open: false,
    closeOnAwayClick: false,
    keepMounted: false
  },
  styles: {
    base: {
      display: 'block',
      overflow: 'overflow-hidden',
      transitionDuration: 'duration-500'
    },
    directions: {
      vertical: {
        height: 'h-0',
        width: 'w-fit',
        transition: 'transition-[height]'
      },
      horizontal: {
        height: 'h-fit',
        width: 'w-0',
        transition: 'transition-[width]'
      },
      'horizontal-full': {
        height: 'h-fit',
        width: 'w-0',
        transition: 'transition-[width]'
      }
    }
  }
};

export default collapseConfig;
