export interface LinearProgressConfig {
  defaultProps: {
    value: number | string;
    color: Colors;
  };
  styles: {
    container: {
      base: Record<string, string>;
      label: Record<string, string>;
      color: Record<Themes, Record<string, string>>;
    },
    bar: {
      base: Record<string, string>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>
    },
    buffer: {
      base: Record<string, string>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>
    }
  }
}

const linearProgressConfig: LinearProgressConfig = {
  defaultProps: {
    value: 0,
    color: 'primary'
  },
  styles: {
    container: {
      base: {
        position: 'relative',
        display: 'flex',
        minHeight: 'min-h-[0.25rem]',
        width: 'w-full',
        borderRadius: 'rounded-full',
        overflow: 'overflow-hidden'
      },
      label: {
        height: 'h-4'
      },
      color: {
        light: {
          background: 'bg-light-surface-high'
        }
      }
    },
    bar: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        zIndex: 'z-10',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        height: 'h-full',
        font: 'antialiased font-normal text-xs font-sans',
        transition: 'transition-[width]',
        overflow: 'overflow-hidden'
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-dark'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    },
    buffer: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        display: 'block',
        height: 'h-full',
        transition: 'transition-[width]'
      },
      colors: {
        light: {
          default: {
            background: 'bg-light-surface-light'
          },
          primary: {
            background: 'bg-light-primary-light'
          },
          secondary: {
            background: 'bg-light-secondary-light'
          },
          success: {
            background: 'bg-light-success-light'
          },
          warning: {
            background: 'bg-light-warning-light'
          },
          error: {
            background: 'bg-light-error-light'
          }
        }
      }
    }
  }
};

export default linearProgressConfig;
