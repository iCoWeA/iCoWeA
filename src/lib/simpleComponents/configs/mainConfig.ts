import { type AriaRole } from 'react';

export interface MainConfig {
  defaultProps: {
    variant: Variants;
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<Variants, Record<Themes, Record<string, string>>>;
  };
}

const mainConfig: MainConfig = {
  defaultProps: {
    variant: 'plain',
    role: 'main'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      alignItems: 'items-center',
      width: 'w-full'
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

export default mainConfig;
