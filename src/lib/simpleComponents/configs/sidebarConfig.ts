import { type AriaRole, type BaseHTMLAttributes } from 'react';

export interface SidebarConfig {
  defaultProps: {
    container: {
      role: AriaRole;
    },
    box: {
      containerProps: BaseHTMLAttributes<HTMLElement>;
      layout: BoxLayouts;
      color: Colors;
      elevated: boolean;
    }
  };
  styles: {
    container: {
      base: Record<string, string>;
    },
    box: {
      leftDivider: Record<string, string>;
      rightDivider: Record<string, string>;
    }
  };
}

const sidebarConfig: SidebarConfig = {
  defaultProps: {
    container: {
      role: 'complementary'
    },
    box: {
      containerProps: {},
      layout: 'col',
      color: 'default',
      elevated: false
    }
  },
  styles: {
    container: {
      base: {
        width: 'w-3/12',
        height: 'h-full'
      }
    },
    box: {
      leftDivider: {
        border: 'border-l'
      },
      rightDivider: {
        border: 'border-r'
      }
    }
  }
};

export default sidebarConfig;
