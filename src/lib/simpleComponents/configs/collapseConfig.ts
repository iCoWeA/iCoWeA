import { type CollapseDirections } from '../components/UI/Collapse';

export interface CollapseConfig {
  defaultProps: {
    direction: CollapseDirections;
    closeOnAwayClick: boolean;
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
    directions: Record<CollapseDirections, Record<string, string>>;
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    direction: 'vertical',
    closeOnAwayClick: false,
    open: false,
    unmountOnExit: false
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
