export interface IconConfig {
  defaultProps: {
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
    color: 'default',
    'aria-hidden': true,
    viewBox: '0 0 24 24'
  },
  styles: {
    base: {
      display: 'inline-block',
      height: 'h-full',
      aspectRatio: 'aspect-square'
    },
    sizes: {
      xs: {
        height: 'h-xs-h'
      },
      sm: {
        height: 'h-sm-h'
      },
      md: {
        height: 'h-md-h'
      },
      lg: {
        height: 'h-lg-h'
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            fill: 'fill-light-on-surface-variant'
          },
          primary: {
            fill: 'fill-light-on-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary'
          },
          success: {
            fill: 'fill-light-on-success'
          },
          warning: {
            fill: 'fill-light-on-warning'
          },
          error: {
            fill: 'fill-light-on-error'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-on-surface-variant'
          },
          primary: {
            fill: 'fill-dark-on-primary'
          },
          secondary: {
            fill: 'fill-dark-on-secondary'
          },
          success: {
            fill: 'fill-dark-on-success'
          },
          warning: {
            fill: 'fill-dark-on-warning'
          },
          error: {
            fill: 'fill-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            fill: 'fill-light-on-surface'
          },
          primary: {
            fill: 'fill-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary'
          },
          success: {
            fill: 'fill-light-success'
          },
          warning: {
            fill: 'fill-light-warning'
          },
          error: {
            fill: 'fill-light-error'
          }
        },
        dark: {
          default: {
            fill: 'fill-dark-on-surface'
          },
          primary: {
            fill: 'fill-dark-primary'
          },
          secondary: {
            fill: 'fill-dark-secondary'
          },
          success: {
            fill: 'fill-dark-success'
          },
          warning: {
            fill: 'fill-dark-warning'
          },
          error: {
            fill: 'fill-dark-error'
          }
        }
      }
    }
  }
};

export default iconConfig;
