import { type AriaRole } from 'react';

export interface FooterConfig {
  defaultProps: {
    variant: Variants;
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<Variants, Record<Themes, Record<string, string>>>;
  };
}

const footerConfig: FooterConfig = {
  defaultProps: {
    variant: 'text',
    role: 'region'
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full',
      border: 'border'
    },
    variants: {
      plain: {
        light: {
          border: 'border-transparent'
        },
        dark: {
          border: 'border-transparent'
        }
      },
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
          border: 'border-light-surface-light border-y-light-divider',
          background: 'bg-light-surface-light'
        },
        dark: {
          border: 'border-dark-surface-light border-y-dark-divider',
          background: 'bg-dark-surface-light'
        }
      }
    }
  }
};

export default footerConfig;
