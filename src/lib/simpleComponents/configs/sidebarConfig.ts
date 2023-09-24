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
      alignItems: 'items-center',
      width: 'w-3/12',
      padding: 'py-md',
      border: 'border'
    },
    variants: {
      plain: {},
      text: {
        light: {
          border: 'border-light-surface-light',
          background: 'bg-light-surface-light'
        },
        dark: {
          border: 'border-dark-surface-light',
          background: 'bg-dark-surface-light'
        }
      },
      soft: {
        light: {
          border: 'border-light-surface-soft',
          background: 'bg-light-surface-soft'
        },
        dark: {
          border: 'border-dark-surface-soft',
          background: 'bg-dark-surface-soft'
        }
      },
      solid: {
        light: {
          border: 'border-light-surface',
          background: 'bg-light-surface'
        },
        dark: {
          border: 'border-dark-surface',
          background: 'bg-dark-surface'
        }
      },
      outlined: {
        light: {
          border: 'border-light-surface-divider',
          background: 'bg-light-surface-light'
        },
        dark: {
          border: 'border-dark-surface-divider',
          background: 'bg-dark-surface-light'
        }
      }
    }
  }
};

export default sidebarConfig;
