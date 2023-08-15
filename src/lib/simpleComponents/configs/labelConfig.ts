export type LabelColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface LabelProps {
  color?: LabelColors;
  className?: string;
}

export interface LabelConfig {
  defaultProps: Required<LabelProps>;
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<LabelColors, Record<string, string>>>;
  }
}

const labelConfig: LabelConfig = {
  defaultProps: {
    color: 'default',
    className: ''
  },
  styles: {
    base: {
      display: 'inline-block',
      font: 'antialiased font-normal text-base font-sans',
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

export default labelConfig;
