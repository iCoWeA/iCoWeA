import { type AriaRole } from 'react';

export interface SidebarConfig {
  defaultProps: {
    variant: Variants;
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<Variants, Record<Themes, Record<string, string>>>;
  };
}

const sidebarConfig: SidebarConfig = {
  defaultProps: {
    variant: 'solid',
    role: 'complementary'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      justifyContent: 'justify-center',
      width: 'w-3/12',
      padding: 'py-md'
    },
    variants: {
      plain: {},
      text: {
        light: {
          background: 'bg-light-surface-light'
        },
        dark: {
          background: 'bg-dark-surface-light'
        }
      },
      soft: {
        light: {
          background: 'bg-light-surface-soft'
        },
        dark: {
          background: 'bg-dark-surface-soft'
        }
      },
      solid: {
        light: {
          background: 'bg-light-surface'
        },
        dark: {
          background: 'bg-dark-surface'
        }
      },
      outlined: {
        light: {
          border: 'border border-light-divider',
          background: 'bg-light-light'
        },
        dark: {
          border: 'border border-dark-divider',
          background: 'bg-dark-light'
        }
      }
    }
  }
};

export default sidebarConfig;
