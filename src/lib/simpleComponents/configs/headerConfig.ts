import { type AriaRole } from 'react';

export interface HeaderConfig {
  defaultProps: {
    variant: Variants;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    variants: Record<Variants, Record<Themes, Record<Colors, Record<string, string>>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    variant: 'text',
    color: 'default',
    elevated: true,
    fullwidth: false,
    role: 'banner'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-screen',
      padding: 'py-lg-py',
      border: 'border border-transparent'
    },
    elevated: {
      position: 'relative',
      zIndex: 'z-[1]',
      shadow: 'shadow-md'
    },
    variants: {
      plain: {
        light: {},
        dark: {}
      },
      text: {
        light: {
          default: {
            background: 'bg-light-surface-light'
          },
          primary: {
            background: 'bg-light-surface-light'
          },
          secondary: {
            background: 'bg-light-surface-light'
          },
          success: {
            background: 'bg-light-surface-light'
          },
          warning: {
            background: 'bg-light-surface-light'
          },
          error: {
            background: 'bg-light-surface-light'
          }
        },
        dark: {
          default: {
            background: 'bg-dark-surface-light'
          },
          primary: {
            background: 'bg-dark-surface-light'
          },
          secondary: {
            background: 'bg-dark-surface-light'
          },
          success: {
            background: 'bg-dark-surface-light'
          },
          warning: {
            background: 'bg-dark-surface-light'
          },
          error: {
            background: 'bg-dark-surface-light'
          }
        }
      },
      soft: {
        light: {
          default: {
            background: 'bg-light-surface-soft'
          },
          primary: {
            background: 'bg-light-primary-soft'
          },
          secondary: {
            background: 'bg-light-secondary-soft'
          },
          success: {
            background: 'bg-light-success-soft'
          },
          warning: {
            background: 'bg-light-warning-soft'
          },
          error: {
            background: 'bg-light-error-soft'
          }
        },
        dark: {
          default: {
            background: 'bg-dark-surface-soft'
          },
          primary: {
            background: 'bg-dark-primary-soft'
          },
          secondary: {
            background: 'bg-dark-secondary-soft'
          },
          success: {
            background: 'bg-dark-success-soft'
          },
          warning: {
            background: 'bg-dark-warning-soft'
          },
          error: {
            background: 'bg-dark-error-soft'
          }
        }
      },
      solid: {
        light: {
          default: {
            background: 'bg-light-surface'
          },
          primary: {
            background: 'bg-light-primary'
          },
          secondary: {
            background: 'bg-light-secondary'
          },
          success: {
            background: 'bg-light-success'
          },
          warning: {
            background: 'bg-light-warning'
          },
          error: {
            background: 'bg-light-error'
          }
        },
        dark: {
          default: {
            background: 'bg-dark-surface'
          },
          primary: {
            background: 'bg-dark-primary'
          },
          secondary: {
            background: 'bg-dark-secondary'
          },
          success: {
            background: 'bg-dark-success'
          },
          warning: {
            background: 'bg-dark-warning'
          },
          error: {
            background: 'bg-dark-error'
          }
        }
      },
      outlined: {
        light: {
          default: {
            border: 'border-b-light-divider',
            background: 'bg-light-surface-light'
          },
          primary: {
            border: 'border-b-light-primary',
            background: 'bg-light-surface-light'
          },
          secondary: {
            border: 'border-b-light-secondary',
            background: 'bg-light-surface-light'
          },
          success: {
            border: 'border-b-light-success',
            background: 'bg-light-surface-light'
          },
          warning: {
            border: 'border-b-light-warning',
            background: 'bg-light-surface-light'
          },
          error: {
            border: 'border-b-light-error',
            background: 'bg-light-surface-light'
          }
        },
        dark: {
          default: {
            border: 'border-b-dark-divider',
            background: 'bg-dark-surface-light'
          },
          primary: {
            border: 'border-b-dark-primary',
            background: 'bg-dark-surface-light'
          },
          secondary: {
            border: 'border-b-dark-secondary',
            background: 'bg-dark-surface-light'
          },
          success: {
            border: 'border-b-dark-success',
            background: 'bg-dark-surface-light'
          },
          warning: {
            border: 'border-b-dark-warning',
            background: 'bg-dark-surface-light'
          },
          error: {
            border: 'border-b-dark-error',
            background: 'bg-dark-surface-light'
          }
        }
      }
    }
  }
};

export default headerConfig;
