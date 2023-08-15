export type CardVariants = 'filled' | 'outlined';
export type CardColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface CardProps {
  variant?: CardVariants;
  color?: CardColors;
  elevated?: boolean;
  className?: string;
}

export interface CardConfig {
  defaultProps: Required<CardProps>;
  styles: {
    base: Record<string, string>;
    elevated: Record<string, Record<string, string>>;
    variants: Record<CardVariants, Record<string, Record<CardColors, Record<string, string>>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'default',
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
            background: 'bg-default-bg'
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
          }
        }
      },
      outlined: {
        default: {
          default: {
            border: 'border border-default-bg-light'
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
          }
        }
      }
    }
  }
};

export default cardConfig;
