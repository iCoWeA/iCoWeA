export type CardVariants = 'filled' | 'outlined';

export interface CardConfig {
  defaultProps: {
    variant: CardVariants;
    color: Colors;
    elevated: boolean;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, Record<string, string>>;
    variants: Record<CardVariants, Record<string, Record<Colors, Record<string, string>>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'light',
    elevated: false,
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-2xl',
      overflow: 'overflow-hidden',
      focus: 'focus:outline-0'
    },
    elevated: {
      default: {
        shadow: 'shadow-md shadow-default-bg-dark/20'
      }
    },
    variants: {
      filled: {
        default: {
          default: {
            background: 'bg-default-default'
          },
          primary: {
            background: 'bg-default-primary'
          },
          secondary: {
            background: 'bg-default-secondary'
          },
          success: {
            background: 'bg-default-success'
          },
          warning: {
            background: 'bg-default-warning'
          },
          error: {
            background: 'bg-default-error'
          },
          light: {
            background: 'bg-default-light'
          },
          dark: {
            background: 'bg-default-dark'
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-default'
          },
          primary: {
            border: 'border border-default-primary'
          },
          secondary: {
            border: 'border border-default-secondary'
          },
          success: {
            border: 'border border-default-success'
          },
          warning: {
            border: 'border border-default-warning'
          },
          error: {
            border: 'border border-default-error'
          },
          light: {
            border: 'border border-default-light'
          },
          dark: {
            border: 'border border-default-dark'
          }
        }
      }
    }
  }
};

export default cardConfig;
