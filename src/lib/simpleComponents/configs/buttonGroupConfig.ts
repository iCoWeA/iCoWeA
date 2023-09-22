import { type ButtonVariants } from '../components/UI/Button';

export interface ButtonGroupConfig {
  defaultProps: {
    variant: ButtonVariants;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
      elevated: Record<string, string>;
    },
    button: {
      base: Record<string, string>;
      first: Record<string, string>;
      last: Record<string, string>;
      firstOutlined: Record<string, string>;
      lastOutlined: Record<string, string>;
      variants: Record<ButtonVariants, Record<string, string>>;
    },
    divider: {
      base: Record<string, string>;
      after: Record<string, string>;
      disabled: Record<Themes, Record<string, string>>;
      sizes: Record<Sizes, Record<string, string>>;
      color: Record<Themes, Record<Colors, Record<string, string>>>;
    }
  }
}

const buttonGroupConfig: ButtonGroupConfig = {
  defaultProps: {
    variant: 'filled',
    size: 'md',
    color: 'primary',
    elevated: false,
    fullwidth: false
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit',
        borderRadius: 'rounded-full'
      },
      fullwidth: {
        width: 'w-full'
      },
      elevated: {
        shadow: 'shadow-md shadow-black/50'
      }
    },
    button: {
      base: {
        borderRadius: 'rounded-none'
      },
      first: {
        borderRadius: 'rounded-l-full'
      },
      last: {
        borderRadius: 'rounded-r-full'
      },
      firstOutlined: {
        border: 'border-l'
      },
      lastOutlined: {
        border: 'border-r'
      },
      variants: {
        plain: {},
        text: {},
        outlined: {
          border: 'border-x-0'
        },
        filled: {
          position: 'relative',
          zIndex: 'z-[1]',
          hover: 'hover:z-[0]',
          focusVisible: 'focus-visible:relative focus-visible:z-[2]'
        }
      }
    },
    divider: {
      base: {
        zIndex: 'z-[3]'
      },
      after: {
        top: 'after:top-1',
        zIndex: 'after:z-[2]',
        height: 'after:h-[calc(100%-0.5rem)]'
      },
      disabled: {
        light: {
          background: 'bg-light-on-surface/20',
          after: 'after:bg-light-on-surface/40'
        }
      },
      sizes: {
        xs: {
          height: 'h-6'
        },
        sm: {
          height: 'h-8'
        },
        md: {
          height: 'h-10'
        },
        lg: {
          height: 'h-12'
        }
      },
      color: {
        light: {
          default: {
            background: 'bg-light-surface-dark'
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
      }
    }
  }
};

export default buttonGroupConfig;
