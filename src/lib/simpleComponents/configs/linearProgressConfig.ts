export interface LinearProgressConfig {
  defaultProps: {
    value: number | string;
    color: Colors;
  };
  styles: {
    container: {
      base: Record<string, string>;
      color: Record<Themes, Record<string, string>>;
    },
    bar: {
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
        display: 'flex',
        minHeight: 'min-h-[0.25rem]',
        width: 'w-full',
        borderRadius: 'rounded-full',
        overflow: 'overflow-hidden'
      },
      color: {
        light: {
          background: 'bg-light-surface-dark'
        }
      }
    },
    bar: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        height: 'h-full',
        minHeight: 'min-h-[0.25rem]',
        font: 'antialiased font-normal text-xs font-sans',
        transition: 'transition-[width]',
        overflow: 'overflow-hidden'
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-light'
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
    }
  }
};

export default linearProgressConfig;
