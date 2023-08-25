export interface MainConfig {
  defaultProps: {
    color: Colors;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  };
}

const mainConfig: MainConfig = {
  defaultProps: {
    color: 'none',
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      padding: 'py-4',
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

export default mainConfig;
