import { type AriaRole } from 'react';

export interface HeaderConfig {
  defaultProps: {
    variant: Variants;
    layout: Layouts;
    elevated: boolean;
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    variants: Record<Variants, Record<Themes, Record<string, string>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    variant: 'text',
    layout: 'page',
    elevated: true,
    role: 'banner'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-full',
      padding: 'p-lg'
    },
    elevated: {
      shadow: 'shadow-md shadow-black/50'
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
          border: 'border-b border-light-divider',
          background: 'bg-light-light'
        },
        dark: {
          border: 'border-b border-dark-divider',
          background: 'bg-dark-light'
        }
      }
    }
  }
};

export default headerConfig;
