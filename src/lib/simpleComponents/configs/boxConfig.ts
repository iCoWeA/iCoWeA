import { type BoxLayouts } from '../components/UI/Box';

export interface BoxConfig {
  defaultProps: {
    layout: BoxLayouts;
    variant: Variants;
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    layouts: Record<BoxLayouts, Record<string, string>>;
    gaps: Record<Sizes, Record<string, string>>;
    variants: Record<Variants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const boxConfig: BoxConfig = {
  defaultProps: {
    layout: 'row',
    variant: 'plain',
    color: 'default'
  },
  styles: {
    base: {
      border: 'border border-transparent'
    },
    layouts: {
      row: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-between',
        width: 'w-full'
      },
      col: {
        display: 'flex',
        flexDirection: 'flex-col',
        width: 'w-full'
      },
      grid: {
        display: 'grid',
        width: 'w-full'
      },
      block: {
        display: 'block',
        width: 'h-fit',
        height: 'h-fit'
      },
      layout: {
        display: 'grid',
        gridTemplateRows: 'grid-rows-[auto_1fr_auto]',
        width: 'w-screen',
        height: 'min-h-screen'
      },
      'sticky-layout': {
        display: 'grid',
        gridTemplateRows: 'grid-rows-[1fr_auto]',
        padding: 'pt-header',
        width: 'w-screen',
        height: 'min-h-screen'
      },
      fullbleed: {
        display: 'flex',
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        margin: 'mx-auto',
        width: 'w-screen',
        padding: 'px-lg-px',
        maxWidth: 'max-w-content'
      },
      dashboard: {
        display: 'flex',
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        width: 'w-full',
        padding: 'px-lg-px'
      }
    },
    gaps: {
      xs: {
        gap: 'gap-xs'
      },
      sm: {
        gap: 'gap-sm'
      },
      md: {
        gap: 'gap-md'
      },
      lg: {
        gap: 'gap-lg'
      }
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
            border: 'border-light-divider',
            background: 'bg-light-surface-light'
          },
          primary: {
            border: 'border-light-primary',
            background: 'bg-light-surface-light'
          },
          secondary: {
            border: 'border-light-secondary',
            background: 'bg-light-surface-light'
          },
          success: {
            border: 'border-light-success',
            background: 'bg-light-surface-light'
          },
          warning: {
            border: 'border-light-warning',
            background: 'bg-light-surface-light'
          },
          error: {
            border: 'border-light-error',
            background: 'bg-light-surface-light'
          }
        },
        dark: {
          default: {
            border: 'border-dark-divider',
            background: 'bg-dark-surface-light'
          },
          primary: {
            border: 'border-dark-primary',
            background: 'bg-dark-surface-light'
          },
          secondary: {
            border: 'border-dark-secondary',
            background: 'bg-dark-surface-light'
          },
          success: {
            border: 'border-dark-success',
            background: 'bg-dark-surface-light'
          },
          warning: {
            border: 'border-dark-warning',
            background: 'bg-dark-surface-light'
          },
          error: {
            border: 'border-dark-error',
            background: 'bg-dark-surface-light'
          }
        }
      }
    }
  }
};

export default boxConfig;
