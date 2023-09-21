import { type CollapseDirections } from '../components/UI/Collapse';

export interface CollapseConfig {
  defaultProps: {
    open: boolean;
    direction: CollapseDirections;
    closeOnAwayClick: boolean;
  };
  styles: {
    base: Record<string, string>;
    directions: Record<CollapseDirections, Record<string, string>>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    open: false,
    direction: 'vertical',
    closeOnAwayClick: false
  },
  styles: {
    base: {
      overflow: 'overflow-hidden'
    },
    directions: {
      vertical: {
        height: 'h-0',
        width: 'w-fit',
        transition: 'transition-[height]'
      },
      'vertical-full': {
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
