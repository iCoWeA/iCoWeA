export interface InputAdornmentConfig {
  defaultProps: {
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  };
}

const inputAdornmentConfig: InputAdornmentConfig = {
  defaultProps: {
    color: 'default'
  },
  styles: {
    base: {
      position: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      width: 'w-6',
      font: 'antialiased font-normal text-base font-sans',
      overflow: 'overflow-hidden',
      pointer: 'pointer-events-none',
      userSelect: 'select-none',
      focus: 'focus:outline-0'
    },
    colors: {
      default: {
        default: {
          fill: 'fill-default-default',
          color: 'text-default-default'
        },
        primary: {
          fill: 'fill-default-primary',
          color: 'text-default-primary'
        },
        secondary: {
          fill: 'fill-default-secondary',
          color: 'text-default-secondary'
        },
        success: {
          fill: 'fill-default-success',
          color: 'text-default-success'
        },
        warning: {
          fill: 'fill-default-warning',
          color: 'text-default-warning'
        },
        error: {
          fill: 'fill-default-error',
          color: 'text-default-error'
        },
        light: {
          fill: 'fill-default-light',
          color: 'text-default-light'
        },
        dark: {
          fill: 'fill-default-dark',
          color: 'text-default-dark'
        }
      }
    }
  }
};

export default inputAdornmentConfig;
