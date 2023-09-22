import { type DividerVariants } from '../components/UI/Divider';

export interface DividerConfig {
  defaultProps: {
    orientation: Orientations;
    variant: DividerVariants;
    disabled: boolean;
  }
  styles: {
    base: Record<string, string>;
    orientations: Record<Orientations, Record<string, string>>;
    disabled: Record<Themes, Record<string, string>>;
    color: Record<Themes, Record<string, string>>;
    variants: Record<DividerVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const dividerConfig: DividerConfig = {
  defaultProps: {
    orientation: 'horizontal',
    variant: 'plain',
    disabled: false
  },
  styles: {
    base: {
      display: 'block',
      border: 'border-0'
    },
    orientations: {
      horizontal: {
        height: 'h-px',
        width: 'w-full'
      },
      vertical: {
        height: 'h-full',
        width: 'w-px'
      }
    },
    color: {
      light: {
        background: 'bg-light-divider'
      }
    },
    disabled: {
      light: {
        background: 'bg-light-on-surface/40'
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            background: 'bg-light-on-surface'
          },
          primary: {
            background: 'bg-light-on-primary'
          },
          secondary: {
            background: 'bg-light-on-secondary'
          },
          success: {
            background: 'bg-light-on-success'
          },
          warning: {
            background: 'bg-light-on-warning'
          },
          error: {
            background: 'bg-light-on-error'
          }
        }
      },
      text: {
        light: {
          default: {
            background: 'bg-light-on-surface'
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
        }
      },
      outlined: {
        light: {
          default: {
            background: 'bg-light-on-surface'
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
        }
      },
      filled: {
        light: {
          default: {
            background: 'bg-light-on-surface'
          },
          primary: {
            background: 'bg-light-on-primary'
          },
          secondary: {
            background: 'bg-light-on-secondary'
          },
          success: {
            background: 'bg-light-on-success'
          },
          warning: {
            background: 'bg-light-on-warning'
          },
          error: {
            background: 'bg-light-on-error'
          }
        }
      }
    }
  }
};

export default dividerConfig;
