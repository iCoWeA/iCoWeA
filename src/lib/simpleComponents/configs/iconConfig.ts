export interface IconConfig {
  defaultProps: {
    size: Sizes;
    variant: TextVariants;
    color: Colors;
    'aria-hidden': boolean;
    viewBox: string;
  },
  styles: {
    base: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    variants: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const iconConfig: IconConfig = {
  defaultProps: {
    size: 'md',
    variant: 'plain',
    color: 'default',
    'aria-hidden': true,
    viewBox: '0 0 24 24'
  },
  styles: {
    base: {
      display: 'inline-block',
      aspectRatio: 'aspect-square'
    },
    sizes: {
      xs: {
        height: 'h-xs-size'
      },
      sm: {
        height: 'h-sm-size'
      },
      md: {
        height: 'h-md-size'
      },
      lg: {
        height: 'h-lg-size'
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            color: 'text-light-on-surface-variant'
          },
          primary: {
            color: 'text-light-on-primary'
          },
          secondary: {
            color: 'text-light-on-secondary'
          },
          success: {
            color: 'text-light-on-success'
          },
          warning: {
            color: 'text-light-on-warning'
          },
          error: {
            color: 'text-light-on-error'
          }
        },
        dark: {
          default: {
            color: 'text-dark-on-surface-variant'
          },
          primary: {
            color: 'text-dark-on-primary'
          },
          secondary: {
            color: 'text-dark-on-secondary'
          },
          success: {
            color: 'text-dark-on-success'
          },
          warning: {
            color: 'text-dark-on-warning'
          },
          error: {
            color: 'text-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            color: 'text-light-on-surface'
          },
          primary: {
            color: 'text-light-primary'
          },
          secondary: {
            color: 'text-light-secondary'
          },
          success: {
            color: 'text-light-success'
          },
          warning: {
            color: 'text-light-warning'
          },
          error: {
            color: 'text-light-error'
          }
        },
        dark: {
          default: {
            color: 'text-dark-on-surface'
          },
          primary: {
            color: 'text-dark-primary'
          },
          secondary: {
            color: 'text-dark-secondary'
          },
          success: {
            color: 'text-dark-success'
          },
          warning: {
            color: 'text-dark-warning'
          },
          error: {
            color: 'text-dark-error'
          }
        }
      }
    }
  }
};

export default iconConfig;
