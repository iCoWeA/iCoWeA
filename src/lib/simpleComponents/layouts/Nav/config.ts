import { type NavDefaultProps } from '.';

export interface NavConfig {
  defaultProps: Required<NavDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    };
  };
}

const navConfig: NavConfig = {
  defaultProps: {
    color: 'none'
  },
  styles: {
    root: {
      base: {
        display: 'flex'
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
            background: 'bg-default-warning'
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

export default navConfig;
