import { type BaseHTMLAttributes } from 'react';

export interface CollapseConfig {
  defaultProps: {
    open: boolean;
    transitionProps: {
      unmountOnExit: boolean;
      enterDuration: number;
      exitDuration: number;
    };
    componentsProps: {
      container: BaseHTMLAttributes<HTMLDivElement>;
    };
  };
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
    transitionProps: {
      unmountOnExit: false,
      enterDuration: 500,
      exitDuration: 500
    },
    componentsProps: {
      container: {}
    }
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
        display: 'flex',
        overflow: 'overflow-hidden',
        focus: 'focus:outline-0'
      }
    }
  }
};

export default collapseConfig;
