import { type AriaRole } from 'react';
import { type BoxProps } from '../components/UI/Box';

export interface HeaderConfig {
  defaultProps: {
    variant: Variants;
    fullwidth: boolean;
    elevated: boolean;
    boxProps: BoxProps;
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
    fullwidth: false,
    elevated: true,
    boxProps: {
      size: 'lg',
      variant: 'fullbleed'
    },
    role: 'banner'
  },
  styles: {
    base: {
      position: 'relative',
      zIndex: 'z-[1]',
      display: 'flex',
      width: 'w-full',
      padding: 'py-lg-p',
      border: 'border'
    },
    elevated: {
      shadow: 'shadow-md shadow-black/50'
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
          border: 'border-light-surface-light border-b-light-divider',
          background: 'bg-light-surface-light'
        },
        dark: {
          border: 'border-dark-surface-light border-b-dark-divider',
          background: 'bg-dark-surface-light'
        }
      }
    }
  }
};

export default headerConfig;
