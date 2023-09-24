import { type AriaRole } from 'react';

export interface FooterConfig {
  defaultProps: {
    variant: Variants;
    layout: Layouts;
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
    layout: 'page',
    role: 'contentinfo'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-full',
      padding: 'p-md'
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
          border: 'border-t border-light-divider',
          background: 'bg-light-light'
        },
        dark: {
          border: 'border-t border-dark-divider',
          background: 'bg-dark-light'
        }
      }
    }
  }
};

export default footerConfig;
