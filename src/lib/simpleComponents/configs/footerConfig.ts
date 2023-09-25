import { type AriaRole } from 'react';
import { type BoxProps } from '../components/UI/Box';

export interface FooterConfig {
  defaultProps: {
    variant: Variants;
    fullwidth: boolean;
    boxProps: BoxProps;
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
    fullwidth: false,
    boxProps: {
      size: 'lg',
      variant: 'fullbleed'
    },
    role: 'contentinfo'
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      width: 'w-full',
      padding: 'py-lg-p',
      border: 'border-y'
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
          border: 'border-b-light-surface-light border-t-light-divider',
          background: 'bg-light-surface-light'
        },
        dark: {
          border: 'border-b-dark-surface-light border-t-dark-divider',
          background: 'bg-dark-surface-light'
        }
      }
    }
  }
};

export default footerConfig;
