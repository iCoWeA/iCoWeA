import { type CollapseDefaultProps } from '../components/UI/Collapse';

export interface CollapseConfig {
  defaultProps: Required<CollapseDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      open: Record<string, string>;
    },
    container: {
      base: Record<string, string>;
    }
  }
}

const collapseConfig: CollapseConfig = {
  defaultProps: {
    open: false,
    openTransition: '',
    transitionDuration: 250,
    showDelay: 0,
    hideDelay: 0,
    unmountOnExit: false,
    componentsProps: {}
  },
  styles: {
    root: {
      base: {
        display: 'grid',
        gridTemplateRows: 'grid-rows-[0fr]',
        focus: 'focus:outline-0',
        transition: 'transition-[grid-template-rows]'
      },
      open: {
        gridTemplateRows: 'grid-rows-[1fr]'
      }
    },
    container: {
      base: {
        overflow: 'overflow-hidden',
        focus: 'focus:outline-0'
      }
    }
  }
};

export default collapseConfig;
