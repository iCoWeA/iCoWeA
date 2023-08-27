export interface HeaderConfig {
  defaultProps: {
    color: Colors;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    color: 'none',
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-6',
      padding: 'py-2',
      focus: 'focus:outline-0'
    },
    colors: {
      default: {
        default: {
          background: 'bg-default-default'
        },
        primary: {
          background: 'bg-default-primary'
        },
        secondary: {
          background: 'bg-default-secondary'
        },
        success: {
          background: 'bg-default-success'
        },
        warning: {
          background: 'bgs-default-warning'
        },
        error: {
          background: 'bg-default-error'
        },
        light: {
          background: 'bg-default-light'
        },
        dark: {
          background: 'bg-default-dark'
        }
      }
    }
  }
};

export default headerConfig;
