export interface HeaderConfig {
  defaultProps: {
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    color: 'none'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-6',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'py-2'
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
