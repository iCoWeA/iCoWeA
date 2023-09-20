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
        width: 'w-fit',
        transition: 'transition-[height]'
      },
      'vertical-full': {
        width: 'w-fit',
        transition: 'transition-[height]'
      },
      horizontal: {
        height: 'h-fit',
        transition: 'transition-[width]'
      },
      'horizontal-full': {
        height: 'h-fit',
        transition: 'transition-[width]'
      }
    }
  }
};

export default collapseConfig;
