import { type AriaRole } from 'react';

export interface HeaderConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    plain: Record<Themes, Record<string, string>>;
    variants: Record<BgVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    outlined: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    color: 'default',
    elevated: false,
    fullwidth: false,
    role: 'banner'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-screen',
      padding: 'px-lg py-lg-y'
    },
    elevated: {
      position: 'relative',
      zIndex: 'z-[1]',
      shadow: 'shadow-md'
    },
    plain: {
      light: {
        background: 'bg-light-surface-light'
      },
      dark: {
        background: 'bg-dark-surface-light'
      }
    },
    variants: {
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
      }
    },
    outlined: {
      plain: {
        light: {
          default: {
            border: 'border-b border-light-divider-variant'
          },
          primary: {
            border: 'border-b border-light-on-primary'
          },
          secondary: {
            border: 'border-b border-light-on-secondary'
          },
          success: {
            border: 'border-b border-light-on-success'
          },
          warning: {
            border: 'border-b border-light-on-warning'
          },
          error: {
            border: 'border-b border-light-on-error'
          }
        },
        dark: {
          default: {
            border: 'border-b border-dark-divider-variant'
          },
          primary: {
            border: 'border-b border-dark-on-primary'
          },
          secondary: {
            border: 'border-b border-dark-on-secondary'
          },
          success: {
            border: 'border-b border-dark-on-success'
          },
          warning: {
            border: 'border-b border-dark-on-warning'
          },
          error: {
            border: 'border-b border-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            border: 'border-b border-light-divider'
          },
          primary: {
            border: 'border-b border-light-primary'
          },
          secondary: {
            border: 'border-b border-light-secondary'
          },
          success: {
            border: 'border-b border-light-success'
          },
          warning: {
            border: 'border-b border-light-warning'
          },
          error: {
            border: 'border-b border-light-error'
          }
        },
        dark: {
          default: {
            border: 'border-b border-dark-divider'
          },
          primary: {
            border: 'border-b border-dark-primary'
          },
          secondary: {
            border: 'border-b border-dark-secondary'
          },
          success: {
            border: 'border-b border-dark-success'
          },
          warning: {
            border: 'border-b border-dark-warning'
          },
          error: {
            border: 'border-b border-dark-error'
          }
        }
      }
    }
  }
};

export default headerConfig;
