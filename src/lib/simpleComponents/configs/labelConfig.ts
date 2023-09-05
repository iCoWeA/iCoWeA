export interface LabelConfig {
  defaultProps: {
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const labelConfig: LabelConfig = {
  defaultProps: {
    color: 'default'
  },
  styles: {
    base: {
      display: 'inline-block',
      font: 'antialiased font-normal text-base font-sans'
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

export default labelConfig;
