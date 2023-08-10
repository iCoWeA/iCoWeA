import { type MainDefaultProps } from '.';

export interface MainConfig {
  defaultProps: Required<MainDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    };
  };
}

const mainConfig: MainConfig = {
  defaultProps: {
    color: 'none'
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-4',
        padding: 'py-4'
      },
      colors: {
        default: {
          default: {
            background: 'bg-default-light'
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
  }
};

export default mainConfig;
