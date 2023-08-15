export type InputAdornmentPositions = 'start' | 'end';
export type InputAdornmentColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface InputAdornmentDefaultProps {
  color?: InputAdornmentColor;
}

export interface InputAdornmentConfig {
  defaultProps: Required<InputAdornmentDefaultProps>;
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<InputAdornmentColor, Record<string, string>>>;
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
      font: 'antialiased font-normal text-base font-sans',
      pointer: 'pointer-events-none',
      userSelect: 'select-none',
      focus: 'focus:outline-0'
    },
    colors: {
      default: {
        default: {
          fill: 'fill-default-text',
          color: 'text-default-text'
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
          fill: 'fill-default-text-light',
          color: 'text-default-text-light'
        },
        dark: {
          fill: 'fill-default-text-dark',
          color: 'text-default-text-dark'
        }
      }
    }
  }
};

export default inputAdornmentConfig;
