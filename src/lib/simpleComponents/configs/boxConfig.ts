export interface BoxConfig {
  defaultProps: {
    layout: BoxLayouts;
    color: Colors;
    elevated: boolean;
  };
  styles: {
    elevated: Record<string, string>;
    layouts: Record<BoxLayouts, Record<string, string>>;
    gaps: Record<Sizes, Record<string, string>>;
    text: Record<Themes, Record<string, string>>;
    variants: Record<BgVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    outlined: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const boxConfig: BoxConfig = {
  defaultProps: {
    layout: 'row',
    color: 'default',
    elevated: false
  },
  styles: {
    elevated: {
      position: 'relative',
      zIndex: 'z-[1]',
      shadow: 'shadow-md'
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
        maxWidth: 'max-w-content'
      },
      dashboard: {
        display: 'flex',
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        width: 'w-full'
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
    text: {
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
            border: 'border border-light-divider-variant'
          },
          primary: {
            border: 'border border-light-on-primary'
          },
          secondary: {
            border: 'border border-light-on-secondary'
          },
          success: {
            border: 'border border-light-on-success'
          },
          warning: {
            border: 'border border-light-on-warning'
          },
          error: {
            border: 'border border-light-on-error'
          }
        },
        dark: {
          default: {
            border: 'border border-dark-divider-variant'
          },
          primary: {
            border: 'border border-dark-on-primary'
          },
          secondary: {
            border: 'border border-dark-on-secondary'
          },
          success: {
            border: 'border border-dark-on-success'
          },
          warning: {
            border: 'border border-dark-on-warning'
          },
          error: {
            border: 'border border-dark-on-error'
          }
        }
      },
      solid: {
        light: {
          default: {
            border: 'border border-light-divider'
          },
          primary: {
            border: 'border border-light-primary'
          },
          secondary: {
            border: 'border border-light-secondary'
          },
          success: {
            border: 'border border-light-success'
          },
          warning: {
            border: 'border border-light-warning'
          },
          error: {
            border: 'border border-light-error'
          }
        },
        dark: {
          default: {
            border: 'border border-dark-divider'
          },
          primary: {
            border: 'border border-dark-primary'
          },
          secondary: {
            border: 'border border-dark-secondary'
          },
          success: {
            border: 'border border-dark-success'
          },
          warning: {
            border: 'border border-dark-warning'
          },
          error: {
            border: 'border border-dark-error'
          }
        }
      }
    }
  }
};

export default boxConfig;
