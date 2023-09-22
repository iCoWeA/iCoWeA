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
      sizes: Record<Sizes, Record<string, string>>;
      outlineSizes: Record<Sizes, Record<string, string>>;
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
      sizes: {
        xs: {
          height: 'h-6',
          padding: 'py-0.5 px-2'
        },
        sm: {
          height: 'h-8',
          padding: 'py-1.5 px-3'
        },
        md: {
          height: 'h-10',
          padding: 'py-2.5 px-4'
        },
        lg: {
          height: 'h-12',
          padding: 'py-3.5 px-5'
        }
      },
      outlineSizes: {
        xs: {
          padding: 'py-px'
        },
        sm: {
          padding: 'py-[0.3125rem]'
        },
        md: {
          padding: 'py-[0.5625rem]'
        },
        lg: {
          padding: 'py-[0.8125rem]'
        }
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
        position: 'relative',
        zIndex: 'z-[3]',
        shrink: 'shrink-0'
      },
      after: {
        position: 'after:absolute',
        top: 'after:top-2/4',
        zIndex: 'after:z-[2]',
        translate: 'after:-translate-y-2/4',
        height: 'after:h-[calc(100%-0.5rem)]',
        width: 'after:w-px'
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
            background: 'bg-light-surface-dark',
            after: 'after:bg-light-on-surface'
          },
          primary: {
            background: 'bg-light-primary',
            after: 'after:bg-light-on-primary'
          },
          secondary: {
            background: 'bg-light-secondary',
            after: 'after:bg-light-on-secondary'
          },
          success: {
            background: 'bg-light-success',
            after: 'after:bg-light-on-success'
          },
          warning: {
            background: 'bg-light-warning',
            after: 'after:bg-light-on-warning'
          },
          error: {
            background: 'bg-light-error',
            after: 'after:bg-light-on-error'
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;
