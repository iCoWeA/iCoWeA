export type MainColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface MainConfig {
  defaultProps: {
    color: MainColors;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<MainColors, Record<string, string>>>;
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
      padding: 'py-4'
    },
    colors: {
      default: {
        default: {
          background: 'bg-default-bg'
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
        }
      }
    }
  }
};

export default mainConfig;
